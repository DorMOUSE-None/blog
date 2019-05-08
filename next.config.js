// next.config.js
const withSass = require('@zeit/next-sass');
const fs = require('fs');
const extractor = require('src/scripts/markdown-extractor.js');

const prod = process.env.NODE_ENV === 'production';

module.exports = withSass({
  env: {
    PREFIX_PATH: prod ? '/blog' : '',
  },
  assetPrefix: prod ? 'https://www.ffutop.com/blog' : '',
  exportPathMap: function() {
    const contentDir = './content/';
    const posts = {};
    const archives = [];

    const markdowns = extractor(contentDir);
    for (let i = 0, length = markdowns.length; i < length; i++) {
      const markdown = markdowns[i];
      archives.push({
        title: markdown.title,
        url: markdown.url,
      });
      posts[markdown.url] = {
        page: '/post',
        query: {
          content: markdown.content,
        },
      };
    }
    return Object.assign(
      {
        '/': {page: '/index'},
        '/archives': {page: '/archives', query: {archives: archives}},
        '/tags': {page: '/tags'},
        '/about': {page: '/about'},
      },
      posts,
    );
  },
});

const handleContents = contentDir => {
  const posts = {};
  const postDigests = {};

  const files = fs.readdirSync(contentDir);
  for (let i = 0, length = files.length; i < length; i++) {
    if (!files[i].endsWith('.json')) continue;
    const rawName = files[i].replace(/.json$/, '');
    posts[rawName] = {
      page: '/post',
      query: {
        filePath: rawName,
      },
    };
  }
};
