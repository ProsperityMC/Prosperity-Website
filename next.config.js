const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({
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
});
