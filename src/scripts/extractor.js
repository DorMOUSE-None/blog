const visit = require('unist-util-visit');
const yaml = require('js-yaml');
const unified = require('unified');
const remark2rehype = require('remark-rehype');
const stringify = require('rehype-stringify');

module.exports = extractor;

function extractor(options) {
  const settings = options || {};
  const mdData = settings.mdData || {};

  return transformer;

  function transformer(tree, file) {
    visit(tree, 'yaml', extractYaml);
    //visit(tree,  extractToc);

    function extractYaml(node) {
      const doc = yaml.safeLoad(node.value);
      mdData.title = doc.title || '';
      mdData.author = doc.author || '';
      mdData.date = doc.date || '';
      mdData.tags = doc.tags || [];
    }

    function extractToc(node) {}

  }
}
