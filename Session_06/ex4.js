import express from "express";

const app = express();

app.use((req, res, next) => {
    console.clear();
    next();
});

// // abc
// app.get("/abc", (req, res, next) => {
//     console.log("A request received to middleware 1");
//     next();
// });

// // abc or ac
// app.get("/ab?c", (req, res, next) => {
//     console.log("A request received to middleware 2");
//     next();
// });

// // abc, abbc, abbbc, ...
// app.get("/ab+c", (req, res, next) => {
//     console.log("A request received to middleware 3");
//     next();
// });

// // abc, abxc, abvgsthyc, ...
// app.get("/ab*c", (req, res, next) => {
//     console.log("A request received to middleware 4");
//     next();
// });

// // abcd, abcbcc, ...
// app.get("/a(bc)+d", (req, res, next) => {
//     console.log("A request received to middleware 5");
//     next();
// });

// // abzc, abwc, abgc, ...
// app.get("/ab.c", (req, res, next) => {
//     console.log("A request received to middleware 6");
//     next();
// });

// // ab.c
// app.get("/ab.c", (req, res, next) => {
//     console.log("A request received to middleware 7");
//     next();
// });

// // ab1c, ab2c, ab9d, ...
// app.get("/ab\\dc", (req, res, next) => {
//     console.log("A request received to middleware 8");
//     next();
// });

// // ac, abc, abbc, abbbc, ...
// app.get(/ab*c/, (req, res, next) => {
//     console.log("A request received to middleware 9");
//     next();
// });

// // abc, abbc, abbbc, abbbbc, ...
// app.get(/ab+c/, (req, res, next) => {
//     console.log("A request received to middleware 9");
//     next();
// });

// // abc, abbc, abbbc, abbbbc, ...
// app.get(/ab+c/, (req, res, next) => {
//     console.log("A request received to middleware 9");
//     next();
// });

// /ac, /ac/, /abc, /abc/, /abbbc, /abbbc/, ...
// app.get(/^\/ab*c(\/)?$/, (req, res, next) => {
//     console.log("A request received to middleware 9");
//     next();
// });

// // abxc, abzc, ab8c, ...
// app.get(/ab.c/, (req, res, next) => {
//     console.log("A request received to middleware 9");
//     next();
// });

// abc/12, abc/356, ...
app.get(/abc\/\d{2,3}$/, (req, res, next) => {
    console.log("A request received to middleware 9");
    next();
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
