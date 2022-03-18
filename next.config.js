const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({
  async redirects() {
    return [
      // Redirect old "tweaks-and-changes" links to the renamed "mods" page.
      {
        source: "/wiki/tweaks-and-changes",
        destination: "/wiki/mods",
        permanent: true,
      },
      // Catch wiki pages and redirect to wiki home.
      {
        source: "/wiki",
        destination: "/wiki/home",
        permanent: true,
      },
      // Shortened for mods wiki page.
      {
        source: "/mods",
        destination: "/wiki/mods",
        permanent: false,
      },
      // Shortened for OptiFine alternatives wiki page.
      {
        source: "/optifine",
        destination: "/wiki/optifine-alternatives",
        permanent: false,
      },
      {
        source: "/of",
        destination: "/wiki/optifine-alternatives",
        permanent: false,
      },
      // Shortened for new player guide wiki page.
      {
        source: "/guide",
        destination: "/wiki/new-player-guide",
        permanent: false,
      },
      // Shortened for FAQ wiki page.
      {
        source: "/faq",
        destination: "/wiki/faq",
        permanent: false,
      },
    ];
  },
});
