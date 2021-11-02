export default function Home() {
  return (
    <>
      {/* This layout code is kind of a mess, I'm not sure if it has to be this cmoplicated */}
      <div className="flex content-center h-screen">
        <div className="lg:flex md:justify-between md:gap-52 lg:gap-64 xl:gap-80 2xl:gap-96">
          <div className="flex-wrap content-center lg:flex">
            <p className="text-6xl">Prosperity</p>
            <div className="flex flex-row gap-4">
              <a href="https://discord.gg/hfTxZ4XxYj">
                <button className="btn btn-yellow">Join</button>
              </a>
              <a href="https://github.com/ProsperityMC/Prosperity-Website/tree/dev">
                <button className="btn">GitHub</button>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap content-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
      </div>
    </>
  );
}
