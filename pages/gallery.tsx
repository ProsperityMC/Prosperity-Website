import Head from "next/head";
import Image from "next/image";

export default function Gallery(): JSX.Element {
  const galleryImages: Array<Array<string>> = [
    ["Image #1", "/img_0", "CarbonGhost's mountain.", "CarbonGhost"],
    ["Image #2", "/img_1", "Spawn town.", "CarbonGhost"],
    ["Image #3", "/img_2", "Spawn town.", "CarbonGhost"],
    ["Image #4", "/img_3", "CarbonGhost's base.", "CarbonGhost"],
    ["Image #5", "/img_4", "Sand shop.", "CarbonGhost"],
  ];
  return (
    <>
      <Head>
        <title>Prosperity | Gallery</title>
        <meta
          name="description"
          content="Fancy screenshots from the Prosperity server."
        />
      </Head>
      <div className="xl:grid-cols-2 gap-x-4 grid content-center gap-8 mx-auto mb-24">
        {galleryImages.map(([title, url, description, author], i) => (
          <div key={title}>
            <div className="hover:drop-shadow-lg drop-shadow-md flex p-0 m-0">
              <Image
                className="hover:brightness-110 w-full p-0 m-0 duration-150 bg-gray-600 rounded-md cursor-pointer"
                onClick={async () => {}}
                src={`/gallery${url}.png`}
                width={1920}
                height={1080}
                alt={description}
              />
            </div>
            <div className="mt-4">
              <p>
                <b>{title}</b> - {description}
              </p>
              <p className="text-xs">Taken by {author}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
