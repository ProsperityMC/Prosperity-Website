import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      {/* This layout code is kind of a mess, I'm not sure if it has to be this cmoplicated */}
      <div className="flex content-center h-screen">
        <div className="lg:flex md:justify-between md:gap-52">
          <div className="flex-wrap content-center lg:flex">
            <p className="text-6xl">Prosperity</p>
            <div className="flex flex-row gap-3 py-5">
              <a href="https://discord.gg/hfTxZ4XxYj">
                <button className="btn btn-yellow">Join</button>
              </a>
              <a href="https://github.com/ProsperityMC/Prosperity-Website/tree/dev">
                <button className="btn">GitHub</button>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap content-center">
            <p>
              Prosperity is a survival-multiplayer Minecraft server with a focus enabling players to work on large projects
              easily. To achieve this the server has many quality of life improvements, and changes that allow you to farm more
              items, and have an easier time than a vanilla server.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
