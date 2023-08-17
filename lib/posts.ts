import html from "remark-html";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import { remark } from "remark";
import axios from "axios";
import convert from "xml-js";

export async function getPrevPostData() {
  try {
    const res = await axios.get(
      "http://3xuxcard.s3-website.ap-northeast-2.amazonaws.com/list.json"
    );
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
  const fileContents = filePaths.map((filePath) =>
    fs.readFileSync(filePath, "utf8")
  );
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

  const sitemapResult = createXML(listJson);

  fs.writeFileSync(path.join("public", "list.json"), JSON.stringify(listJson));
  fs.writeFileSync(path.join("public", "sitemap.xml"), sitemapResult);
}

function createXML(listJson: any[]) {
  const currentDate = new Date();
  const dateString = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  const siteMapContents = listJson.map((it) => ({
    loc: `https://www.3xuxcard.com/posts/${it._id}.html`,
    lastmod: dateString,
    changefreq: "daily",
    priority: "1.0",
  }));

  const json = {
    _declaration: {
      _attributes: {
        version: "1.0",
        encoding: "utf-8",
      },
    },
    urlset: {
      _attributes: {
        xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
      },
      url: [
        {
          loc: `https://www.3xuxcard.com/`,
          lastmod: dateString,
          changefreq: "daily",
          priority: "1.0",
        },
        {
          loc: `https://www.3xuxcard.com/howtouse.html`,
          lastmod: dateString,
          changefreq: "daily",
          priority: "1.0",
        },
        {
          loc: `https://www.3xuxcard.com/cards.html`,
          lastmod: dateString,
          changefreq: "daily",
          priority: "1.0",
        },
        {
          loc: `https://www.3xuxcard.com/contact.html`,
          lastmod: dateString,
          changefreq: "daily",
          priority: "1.0",
        },
        ...siteMapContents,
      ],
    },
  };

  return convert.json2xml(JSON.stringify(json), {
    compact: true,
    ignoreComment: true,
    spaces: 4,
  });
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

export async function createSiteMap() {
  return true;
}
