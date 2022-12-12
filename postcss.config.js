module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("postcss-nested"),
    require("autoprefixer"),
    //    require("stylelint"),
    require("autoprefixer"),
    require("cssnano")
  ]
};
