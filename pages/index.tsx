import Link from "next/link";
import Head from "next/head";
import JoinBtn from "../components/join-btn";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity | Home</title>
      </Head>
      <div className="md:grid md:grid-flow-col grid-cols-2 content-center gap-8 mx-auto">
        <div>
          <p className="text-6xl">Prosperity</p>
          <div className="flex items-center gap-8 my-4">
            <JoinBtn></JoinBtn>
            <Link href="/wiki/home">
              <a>Wiki</a>
            </Link>
          </div>
        </div>
        <p className="markdown flex items-center float-right">
          Prosperity is a survival-multiplayer Minecraft server with a focus
          enabling players to work on large projects easily. To achieve this the
          server has many quality of life improvements, and changes that allow
          you to farm more items, and have an easier time than a vanilla server.
        </p>
      </div>
    </>
  );
}
