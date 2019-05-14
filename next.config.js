// next.config.js
const withSass = require('@zeit/next-sass');
const fs = require('fs');

const extractor = require('src/scripts/markdown-extractor.js');
const constructor = require('src/scripts/constructor.js');

const prod = process.env.NODE_ENV === 'production';

module.exports = withSass({
  env: {
    PREFIX_PATH: prod ? '/blog' : '',
  },
  assetPrefix: prod ? 'https://www.ffutop.com/blog' : '',
  exportPathMap: function() {
    const contentDir = './content/';
    const mdDatas = extractor(contentDir);
    return constructor(mdDatas);
  },
});
