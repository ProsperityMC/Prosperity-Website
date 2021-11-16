import { allWikis } from ".contentlayer/data";
import Link from "next/link";

export async function getStaticProps() {
  const wikis = allWikis.map((wiki) => ({ slug: wiki._raw.flattenedPath, title: wiki.title }));
  return {
    props: {
      wikis,
    },
  };
}

export default function WikiHome({ wikis }: any) {
  return (
    <>
      {wikis.map(({ title, slug }: any) => (
        <div key={slug}>
          <Link href={`/wiki/${slug}`}>
            <a>{title}</a>
          </Link>
        </div>
      ))}
    </>
  );
}
