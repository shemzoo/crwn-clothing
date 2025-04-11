const path = require("path");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          url: require.resolve("url/"),
        },
      },
    },
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
