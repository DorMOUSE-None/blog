const fs = require('fs');
const unified = require('unified');
const parse = require('remark-parse');
const vfile = require('to-vfile');
const report = require('vfile-reporter');
const frontmatter = require('remark-frontmatter');
const toc = require('remark-toc');
const remark2rehype = require('remark-rehype');
const stringify = require('rehype-stringify');

const extractor = require('./extractor.js');

const markdownExtractor = dirName => {
  if (dirName == null) {
    console.log('markdown-extractor need variable [dirName]');
    return;
  }
  const markdownFiles = fs.readdirSync(dirName);
  const markdowns = [];

  for (let i = 0, length = markdownFiles.length; i < length; i++) {
    const fileName = dirName + markdownFiles[i];
    if (!fileName.endsWith('.md')) continue;

    const raw = fs.readFileSync(fileName, {
      encoding: 'UTF-8',
    });
    const vf = extract(raw);
    const markdown = {
      fileName: markdownFiles[i],
      title: markdownFiles[i].replace(/.md$/, ''),
      url: markdownFiles[i].replace(/.md$/, ''),
      content: vf.contents,
      // TODO: 
      // 1. math support
      // 2. content digest
      // 3. yaml parse
      //  - tags
      //  - post date
      //  - author
    };
    markdowns.push(markdown);
  }
  return markdowns;
};

const extract = raw => {
  const processor = unified()
    .use(parse)
    .use(toc, {maxDepth: 3})
    .use(frontmatter, ['yaml'])
    .use(extractor)
    .use(remark2rehype)
    .use(stringify);
  return processor.processSync(raw);
};

module.exports = markdownExtractor;
