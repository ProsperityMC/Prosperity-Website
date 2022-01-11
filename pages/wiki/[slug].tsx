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
      <div className="sm:grid sm:grid-flow-col content-center gap-8 mx-auto">
        {/* Wiki navigation container */}
        <div className="order-last">
          <div className="sm:float-right mb-8">
            <p className="mb-2 text-xl">Wiki</p>
            {wikis.map(({ title, slug }: any) => (
              <div key={slug}>
                <div className="mb-2">
                  <Link href={`/wiki/${slug}`}>
                    <a>{title}</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Wiki content container */}
        <div className="mb-24">
          <p className="text-6xl">{wiki.title}</p>
          {wiki.authors && (
            <p className="my-4 text-xs">Authors: {wiki.authors}</p>
          )}
          {!wiki.authors && <div className="my-4" />}
          <ReactMarkdown
            className="text-content"
            remarkPlugins={[remarkGfm, remarkToc]}
            rehypePlugins={[
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "group",
                  properties: {
                    className: ["linked-header"],
                  },
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
