const _ = require('lodash');

console.log(_.chunk([1, 2, 3, 4, 5, 6, 7], 2));
console.log(_.compact([1, 2, null, [], {}, '']));