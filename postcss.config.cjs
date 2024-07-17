const autoprefixer = require("autoprefixer");
const px2vw = require("postcss-px-to-viewport");

module.exports = {
  plugins: [
    autoprefixer(),
    px2vw({
      viewportWidth: 750,
      exclude: /[\\/](public)[\\/]/,
    }),
  ],
};
