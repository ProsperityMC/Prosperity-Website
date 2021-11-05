import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Head from "next/head";

export default function WikiPage({ content, data }: any): JSX.Element {
  const frontmatter = data;
  return (
    <>
      <Head>
        <title>Prosperity | {data.title}</title>
      </Head>
      <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </>
  );
}

WikiPage.getInitialProps = async (context: any) => {
  const { slug } = context.query;
  const content = await import(`../../content/wiki/${slug}.md`);
  const data = matter(content.default);
  return { ...data };
};
