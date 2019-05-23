// next.config.js
const withSass = require('@zeit/next-sass');
const fs = require('fs');

const extractor = require('src/scripts/markdown-extractor.js');
const constructor = require('src/scripts/constructor.js');

const prod = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV);
console.log(prod);

module.exports = withSass({
  env: {
    PREFIX_PATH: prod ? '/blog' : '',
  },
  assetPrefix: prod ? 'https://www.ffutop.com/blog' : 'http://127.0.0.1:3000',
  exportPathMap: function() {
    const contentDir = './content/';
    const mdDatas = extractor(contentDir);
    return constructor(mdDatas);
  },
});
