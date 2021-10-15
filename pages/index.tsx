import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="lg:flex md:justify-between md:gap-52">
        <div>
          <p className="py-6 text-6xl">Prosperity</p>
          <div className="flex flex-row gap-3">
            <a href="https://discord.gg/hfTxZ4XxYj">
              <button className="btn btn-yellow">Join</button>
            </a>
            <a href="https://github.com/ProsperityMC/Prosperity-Website/tree/dev">
              <button className="btn">GitHub</button>
            </a>
          </div>
        </div>
        <br className="lg:hidden" />
        <div className="flex flex-wrap content-center">
          <p>
            Prosperity is a survival-multiplayer Minecraft server with a focus enabling players to work on large projects
            easily. To achieve this the server has many quality of life improvements, and changes that allow you to farm more
            items, and have an easier time than a vanilla server.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
