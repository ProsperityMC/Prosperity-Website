import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function WikiPage({ content, data }: any) {
  const frontmatter = data;
  return (
    <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}

WikiPage.getInitialProps = async (context: any) => {
  const { slug } = context.query;
  const content = await import(`../../content/wiki/${slug}.md`);
  const data = matter(content.default);
  return { ...data };
};
