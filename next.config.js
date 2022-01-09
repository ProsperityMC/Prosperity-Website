/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/wiki",
        destination: "/wiki/home",
        permanent: true,
      },
      {
        source: "/mods",
        destination: "/wiki/mods",
        permanent: false,
      },
      {
        source: "/optifine",
        destination: "/wiki/optifine-alternatives",
        permanent: false,
      },
    ];
  },
};
