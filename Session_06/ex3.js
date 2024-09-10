import express from "express";

const app = express();


app.get("/route1", (req, res, next) => {
    console.log("A GET request received to middleware 1");
    next()
})


app.use("/", (req, res, next) => {
    console.log("A request received to middleware 2");
    next();
});


app.get("/", (req, res, next) => {
    console.log("A GET request received to middleware 3");
    next();
});


app.post("/", (req, res, next) => {
    console.log("A POST request received to middleware 4");
    next();
});


app.all("/", (req, res, next) => {
    console.log("A request received to middleware 5");
    next();
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
