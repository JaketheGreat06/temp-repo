const _ = require('lodash')

//flattendeep
const items = [1, [2, [3, [4]]]]
const selectitems = _.flattenDeep(items)
console.log(selectitems);
