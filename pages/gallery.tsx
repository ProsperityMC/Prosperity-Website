import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Head from "next/head";

export default function Gallery({ content, data }: any): JSX.Element {
  const frontmatter = data;
  return (
    <>
      <Head>
        <title>Prosperity | Gallery</title>
      </Head>
      <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </>
  );
}

Gallery.getInitialProps = async (context: any) => {
  const content = await import("../content/gallery.md");
  const data = matter(content.default);
  return { ...data };
};
