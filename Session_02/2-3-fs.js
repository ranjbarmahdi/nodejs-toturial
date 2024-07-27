const fs = require('fs');

//====================== fs.writeFileSync(file, data[,options])c
// fs.writeFileSync('./b.text', 'Hello');

//====================== fs.readFileSync(path[,options])
// const msg = fs.readFileSync('./a.text');
// console.log(msg);

// const msg = fs.readFileSync('./a.text', {encoding: 'utf8'});
// console.log(msg);

// const msg = fs.readFileSync('./a.text', 'utf8');
// console.log(msg);

//====================== fs.copyFileSync(src, path[,options]);
// fs.copyFileSync('./a', './b');

// asyncronous => callBack

// fs.writeFile('./b.text', 'Hello', (err) => {
//     if (err) cons ole.log(err);
// });

// fs.readFileSync('./b.text', (err, data) => {
//     console.log(err);
//     console.log(data);
// });

// asyncronous => promise
fs.promises.readFile('./b.text', { encoding: 'utf8' }).then().catch();
console.log(b);
