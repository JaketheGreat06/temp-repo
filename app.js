const m = 12

if (m < 13){
    console.log('small');
    
} else{
    console.log('big')
}

console.log('sup');
console.log('Script finished running');


// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)