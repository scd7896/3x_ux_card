import html from "remark-html";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import { remark } from "remark";
import axios from "axios";

export async function getPrevPostData() {
	try {
		const res = await axios.get("http://3xuxcard.s3-website.ap-northeast-2.amazonaws.com/list.json");
		return res.data;
	} catch (e) {
		return null;
	}
}

export async function getPostData(id: string) {
	const fullPath = path.join(process.cwd(), "posts", `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	let hrlineCount = 0;

	const matterHTMLContent = matterResult.orig
		.toString()
		.split("\n")
		.filter((text) => {
			if (text === "---" && hrlineCount < 2) {
				hrlineCount++;
				return false;
			}
			return hrlineCount >= 2;
		});

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(remarkParse)
		.use(html, { sanitize: false })
		.process(matterHTMLContent.join("\n"));
	const contentHtml = processedContent.toString();

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}

export async function createListJson() {
	const dirs = fs.readdirSync(path.join(process.cwd(), "posts"));
	const filePaths = dirs.map((dir) => path.join(process.cwd(), "posts", dir));
	const fileContents = filePaths.map((filePath) => fs.readFileSync(filePath, "utf8"));
	const matterResults: any = fileContents.map((contents) => matter(contents));

	let listJson = dirs.map((dir, index) => {
		delete matterResults[index].content;
		return {
			...matterResults[index],
			_id: getFileName(dir),
		};
	});

	const prevPostList = await getPrevPostData();

	if (prevPostList) {
		listJson = listJson.map((it) => {
			const result = prevPostList.find((prev: any) => it._id === prev._id);

			if (!result?.createdAt) {
				return {
					...it,
					createdAt: new Date().toISOString(),
				};
			}
			return it;
		});
	}

	fs.writeFileSync(path.join("public", "list.json"), JSON.stringify(listJson));
}

export function getPostList() {
	return fs.readdirSync("posts").map((dir) => getFileName(dir));
}

function getFileName(fullPath: string) {
	const fullPathSplitArray = fullPath.split(".");
	fullPathSplitArray.pop();
	const fileName = fullPathSplitArray.join(".");

	return fileName;
}
