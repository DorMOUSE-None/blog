
const extractor = require('./markdown-extractor.js');

const mds = extractor('./content/');
console.log(mds[0]);
