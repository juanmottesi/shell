module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/mario",
        destination: "https://app1-git-main-juanmottesi.vercel.app/", // Matched parameters can be used in the destination
      },
      {
        source: "/luigi",
        destination: "https://app2-git-main-juanmottesi.vercel.app/", // Matched parameters can be used in the destination
      },
    ];
  },
};
