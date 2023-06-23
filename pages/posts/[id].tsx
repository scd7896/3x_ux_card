import Head from "next/head";
import PostBody from "../../components/services/posts/PostBody";
import PostFooter from "../../components/services/posts/PostFooter";
import PostHead from "../../components/services/posts/PostHead";
import { createListJson, getPostData, getPostList } from "../../lib/posts";

export default function Post({ postData }: any) {
	return (
		<div>
			<Head>
				<title>{postData.title}</title>
				<meta property="og:title" content={postData.title} />
				<meta property="og:site_name" content={postData.title} />
				<meta property="og:description" content={postData.description} />
			</Head>
			<PostHead {...postData} />
			<PostBody
				contentHtml={postData.contentHtml}
				title={postData.title}
				figmaUrl={postData.figmaUrl}
				workSheetUrl={postData.workSheetUrl}
			/>
			<PostFooter />
		</div>
	);
}

export async function getStaticProps({ params }: any) {
	// Add the "await" keyword like this:
	const postData = await getPostData(params.id);

	return {
		props: {
			postData,
		},
	};
}

export const getStaticPaths = async () => {
	const fileNames = getPostList();
	await createListJson();
	return {
		paths: fileNames.map((it) => `/posts/${it}`), //indicates that no page needs be created at build time
		fallback: "blocking", //indicates the type of fallback
	};
};
