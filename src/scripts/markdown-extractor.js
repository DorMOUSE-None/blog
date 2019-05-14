const fs = require('fs');
const unified = require('unified');
const frontmatter = require('remark-frontmatter');
const parse = require('remark-parse');
const math = require('remark-math');
const remark2rehype = require('remark-rehype');
const katex = require('rehype-katex');
const stringify = require('rehype-stringify');

const extractor = require('./extractor.js');

const markdownExtractor = dirName => {
  if (dirName == null) {
    console.log('markdown-extractor need variable [dirName]');
    return;
  }
  const markdownFiles = fs.readdirSync(dirName);
  const mdDatas = [];

  markdownFiles.forEach(markdownFile => {
    // only extract .md files
    const fileName = dirName + markdownFile;
    if (!fileName.endsWith('.md')) return;

    // get raw markdown content
    const rawData = fs.readFileSync(fileName, {encoding: 'UTF-8'});
    // format & extract markdown data
    const mdData = {
      url: markdownFile.replace(/.md$/, ''),
      fileName: markdownFile,
    };
    extract(rawData, mdData);
    extractDigest(rawData, mdData);
    mdDatas.push(mdData);
  });

  return mdDatas;
};

const extract = (rawData, mdData) => {
  const processor = unified()
    .use(parse)
    .use(frontmatter)
    .use(math)
    .use(extractor, {mdData: mdData})
    .use(remark2rehype)
    .use(katex, {
      inlineDoubleDisplay: false,
    })
    .use(stringify);
  const vf = processor.processSync(rawData);
  mdData.content = vf.contents;
};

// extract digest
const extractDigest = (rawData, mdData) => {
  let index = rawData.indexOf('<!-- more -->');
  index = index === -1 ? rawData.length : index;
  const rawDigestData = rawData.substring(0, index);
  const processor = unified()
    .use(parse)
    .use(frontmatter)
    .use(math)
    .use(remark2rehype)
    .use(katex, {
      inlineDoubleDisplay: false,
    })
    .use(stringify);
  mdData.digest = processor.processSync(rawDigestData).contents;
};

module.exports = markdownExtractor;
