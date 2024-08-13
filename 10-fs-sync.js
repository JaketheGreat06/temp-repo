const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/1.txt', 'utf8')
const second = readFileSync('./content/2.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }     // flag option, a = append
)
console.log('done with this task')
console.log('starting the next one')