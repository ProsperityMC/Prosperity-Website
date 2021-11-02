import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function WikiPage({ content, data }: any) {
  const frontmatter = data;
  return <ReactMarkdown className="markdown" children={content} />;
}

WikiPage.getInitialProps = async (context: any) => {
  const { slug } = context.query;
  const content = await import(`../../content/wiki/${slug}.md`);
  const data = matter(content.default);
  return { ...data };
};
