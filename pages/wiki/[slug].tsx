import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { allWikis } from ".contentlayer/data";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export async function getStaticPaths() {
  const paths = allWikis.map((_) => `/wiki/${_._raw.flattenedPath}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // I have no idea if these can / should be returned all in one piece of code
  // Return specific wiki from value passed by slug
  const wiki = allWikis.find((_) => _._raw.flattenedPath === params.slug);
  // Return all wikis for sidebar navigation
  const wikis = allWikis.map((wiki) => ({
    slug: wiki._raw.flattenedPath,
    title: wiki.title,
    description: wiki.description,
  }));
  return {
    props: {
      wiki,
      wikis,
    },
  };
}

export default function WikiPage({ wiki, wikis }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity | {wiki.title}</title>
        <meta name="description" content={wiki.description} />
        <meta name="author" content={wiki.authors} />
      </Head>
      {/* Sidebar navigation */}
      <div className="md:flex md:justify-between gap-16 lg:gap-32">
        <div className="w-56 md:order-last space-y-4 justify-end">
          {/* All wikis navigation */}
          <p className="text-xl mb-4">Wiki</p>
          {wikis.map(({ title, slug }: any) => (
            <div key={slug}>
              <div className="mb-3">
                <Link href={`/wiki/${slug}`}>
                  <a>{title}</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Main wiki page */}
        <div className="w-full mb-16">
          <p className="text-6xl">{wiki.title}</p>
          {wiki.authors && (
            <p className="text-xs my-4">Authors: {wiki.authors}</p>
          )}
          {!wiki.authors && <div className="my-4" />}
          <ReactMarkdown
            className="markdown"
            remarkPlugins={[remarkGfm, remarkToc]}
            rehypePlugins={[
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "wrap",
                  properties: { className: ["clickable-header"] },
                },
              ],
            ]}
          >
            {wiki.body.raw}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
