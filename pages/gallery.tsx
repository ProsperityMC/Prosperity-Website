export default function GalleryPage(): JSX.Element {
  // Array of arrays with paths to each imagea, image descriptions, and image authors.
  // For each item in the array, an element is created on the page.
  // Paths are relitive to the `/public/gallery` directory.
  const galleryImages: Array<Array<string>> = [
    [
      "CarbonGhost's mountain",
      "/carbonghost-base",
      "CarbonGhost's base mountain.",
      "CarbonGhost",
    ],
    ["Mazen's base", "/mazen-base", "Mazen's base exterior.", "CarbonGhost"],
    ["Sand shop", "/sand-shop", "CarbonGhost's sand shop.", "CarbonGhost"],
    [
      "The Redstone Factory",
      "/redstone-shop",
      "CarbonGhost's redstone shop.",
      "CarbonGhost",
    ],
    [
      "Mazen's guardian farm",
      "/guardian-farm",
      "Mazen's guardian farm..",
      "CarbonGhost",
    ],
    ["Raid farm", "/raid-farm", "Terracom's raid farm.", "CarbonGhost"],
    [
      "Terracom's base interior",
      "/terracom-base-interior",
      "Terracom's temporary base interior.",
      "CarbonGhost",
    ],
    [
      "Terracom's base",
      "/terracom-base-exterior",
      "Terracom's temporary base exterior.",
      "CarbonGhost",
    ],
    [
      "Totem shop",
      "/totem-shop",
      "CarbonGhost and Terracom's totem shop.",
      "CarbonGhost",
    ],
    [
      "Concrete blaster",
      "/concrete-blaster",
      "Concrete blaster from CarbonGhost's industrial area.",
      "CarbonGhost",
    ],
  ];

  return (
    <>
      <Head>
        <title>Prosperity | Gallery</title>
        <meta
          name="description"
          content="Screenshots from the Prosperity server."
        />
      </Head>

      <div className="xl:grid-cols-2 gap-x-4 grid content-center gap-8 mx-auto mb-24">
        {/* Gallery iamge
        For each item in the `galleryImages` array, create a new image with props. */}
        {galleryImages.map(([title, url, description, author], i) => (
          <div key={title}>
            <div className="hover:drop-shadow-lg drop-shadow-md flex p-0 m-0">
              <Image
                className="hover:brightness-110 w-full p-0 m-0 duration-150 bg-gray-600 rounded-md cursor-pointer"
                onClick={async () => {}}
                src={`/gallery${url}.png`}
                width={2560}
                height={1440}
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

import Head from "next/head";
import Image from "next/image";
