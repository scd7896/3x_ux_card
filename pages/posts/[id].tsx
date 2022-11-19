import { createListJson, getPostData, getPostList } from "../../lib/posts";


export default function Post({ postData }: any) {
  return (
    <div>
      {postData.title}
      <br />
      {postData.author}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}

export async function getStaticProps({ params }: any) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  
  return {
    props: {
      postData    
    },
  };
}

export const getStaticPaths = async () => {
  const fileNames = getPostList();
  createListJson();
  return {
      paths: fileNames.map(it => `/posts/${it}`), //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}