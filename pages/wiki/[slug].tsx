import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { allWikis } from ".contentlayer/data";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = allWikis.map((_) => `/wiki/${_._raw.flattenedPath}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const wiki = allWikis.find((_) => _._raw.flattenedPath === params.slug);
  const wikis = allWikis.map((wiki) => ({
    slug: wiki._raw.flattenedPath,
    title: wiki.title,
    authors: wiki.authors,
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
      <div className="lg:flex md:justify-between md:gap-16">
        <div className="w-52 md:order-last">
          {wikis.map(({ title, slug }: any) => (
            <div key={slug}>
              <div className="pb-3">
                <Link href={`/wiki/${slug}`}>
                  <a>{title}</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <p className="text-6xl">{wiki.title}</p>
          <p>By {wiki.authors}</p>
          <Link href="/wiki">
            <a>
              <button className="btn btn-sm">Back</button>
            </a>
          </Link>
          <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
            {wiki.body.raw}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
