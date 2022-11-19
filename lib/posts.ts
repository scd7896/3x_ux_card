import html from 'remark-html';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import remarkParse from 'remark-parse';
import { remark } from 'remark';


export async function getPostData(id: string) {
  const fullPath = path.join("posts", `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkParse)
    .use(html, {sanitize: false})
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function createListJson() {
  const dirs = fs.readdirSync("posts");
  const filePaths = dirs.map(dir => path.join("posts", dir));
  const fileContents = filePaths.map(filePath => fs.readFileSync(filePath, 'utf8'));
  const matterResults: any = fileContents.map(contents => matter(contents));

  const listJson = dirs.map((dir, index) => {
    delete matterResults[index].content    
    return {
      ...matterResults[index],
      _id: getFileName(dir)
    }
  })

  fs.writeFileSync(path.join("public", "list.json"), JSON.stringify(listJson));
}

export function getPostList() {
  return fs.readdirSync("posts").map(dir => getFileName(dir))
}

function getFileName(fullPath: string) {
  const fullPathSplitArray = fullPath.split(".");
    fullPathSplitArray.pop();
    const fileName = fullPathSplitArray.join(".");

    return fileName
}