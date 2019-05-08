const fs = require('fs');
const unified = require('unified');
const parse = require('remark-parse');
const vfile = require('to-vfile');
const report = require('vfile-reporter');
const frontmatter = require('remark-frontmatter');
const toc = require('remark-toc');
const remark2rehype = require('remark-rehype');
const stringify = require('rehype-stringify');

convertor = dirName => {
  const markdownFiles = fs.readdirSync(dirName);
  const mdsMap = {};

  for (let i = 0, length = markdownFiles.length; i < length; i++) {
    const fileName = dirName + markdownFiles[i];
    if (!fileName.endsWith('.md')) continue;

    const raw = fs.readFileSync(fileName, {
      encoding: 'UTF-8',
    });
    //mdsMap[markdownFiles[i]] = extract(raw);
    fs.writeFileSync(
      fileName.replace(/.md$/, '.json'),
      JSON.stringify(extract(raw)),
    );
  }
};

const extract = raw => {
  const processor = unified()
    .use(parse)
    .use(toc, {maxDepth: 3})
    .use(frontmatter, ['yaml'])
    .use(remark2rehype)
    .use(stringify);
  return processor.processSync(raw);
};

module.exports = {
  convertor: convertor,
};
convertor('./content/');
