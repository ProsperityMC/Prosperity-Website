import { allWikis } from ".contentlayer/data";
import Link from "next/link";

export async function getStaticProps() {
  const wikis = allWikis.map((wiki) => ({
    slug: wiki._raw.flattenedPath,
    title: wiki.title,
    authors: wiki.authors,
    description: wiki.description,
  }));
  return {
    props: {
      wikis,
    },
  };
}

export default function WikiHome({ wikis }: any) {
  return (
    <>
      <p className="text-6xl">Wiki</p>
      {wikis.map(({ title, slug, description }: any) => (
        <div key={slug}>
          <div className="pb-8">
            <Link href={`/wiki/${slug}`}>
              <a className="text-xl text-yellow-500">{title}</a>
            </Link>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
