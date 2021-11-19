import Link from "next/link";
import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity | Home</title>
      </Head>
      <div className="flex content-center h-screen">
        <div className="lg:flex md:justify-between md:gap-52 lg:gap-64 xl:gap-80 2xl:gap-96">
          <div className="flex-wrap content-center lg:flex">
            <p className="text-6xl">Prosperity</p>
            <div className="btn-group my-4">
              <a href="https://discord.gg/hfTxZ4XxYj">
                <button className="btn btn-yellow">Join ↗</button>
              </a>
              <Link href="/wiki">
                <a>
                  <button className="btn">Wiki</button>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap content-center">
            Prosperity is a survival-multiplayer Minecraft server with a focus enabling players to work on large projects
            easily. To achieve this the server has many quality of life improvements, and changes that allow you to farm more
            items, and have an easier time than a vanilla server.
          </div>
        </div>
      </div>
    </>
  );
}
