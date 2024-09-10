import express from "express";

const app = express();

app.use((req, res, next) => {
    console.clear();
    next();
});

// // /user/12, /user/ali
// app.get("/user/:id", (req, res, next) => {
//     console.log("A request received to middleware");
//     console.log(req.params);
//     next();
// });


// // /user/12/book/roman, /user/ali/book/47, ...
// app.get("/user/:id/book/:bookId", (req, res, next) => {
//     console.log("A request received to middleware");
//     console.log(req.params);
//     next();
// });


// // /file/records.csv,  ...
// app.get("/file/:name.:ext", (req, res, next) => {
//     console.log("A request received to middleware");
//     console.log(req.params);
//     next();
// });


// // /books/20-40
// app.get("/books/:from-:to", (req, res, next) => {
//     console.log("A request received to middleware");
//     console.log(req.params);
//     next();
// });


// // /user/1, /user/31, /user/314,
// app.get("/user/:id(\\d{1,3})", (req, res, next) => {
//     console.log("A request received to middleware");
//     console.log(req.params);
//     next();
// });


// /user/1, /user/31, /user/314, 
app.get("/user/:id(\\d{1,3})", (req, res, next) => {
    console.log("A request received to middleware");
    console.log(req.params);
    next();
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
