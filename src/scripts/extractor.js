const visit = require('unist-util-visit');

module.exports = extractor;

function extractor() {
  return transformer;

  function transformer(tree, file) {
    visit(tree, visitor);

    function visitor(node, index, parent) {
    }
  }
}
