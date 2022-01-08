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
    ];
  },
};
