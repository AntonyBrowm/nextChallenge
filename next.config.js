/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  env:{
    URI_API:process.env.URI,
  },
};