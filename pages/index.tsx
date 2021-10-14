import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="md:flex sm:justify-between sm:gap-52">
        <div>
          <p className="py-6 text-6xl">Prosperity</p>
          <div className="flex flex-row gap-3">
            <button className="btn">
              <a href="https://discord.gg/hfTxZ4XxYj">Join</a>
            </button>
            <button className="btn">
              <a href="https://github.com/ProsperityMC/Prosperity-Website/tree/dev">GitHub</a>
            </button>
          </div>
        </div>
        <br className="md:hidden" />
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
