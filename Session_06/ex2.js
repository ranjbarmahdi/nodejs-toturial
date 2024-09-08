import express from "express";

const app = express();

function logger(req, res, next) {
    const startTime = Date.now();
    next();
    const duration = Date.now() - startTime;
    console.log("Request duration: " + duration + " ms");
}

function addHeader(req, res, next) {
    res.setHeader("Custom-Header", "Custom Value");
    next();
}

app.use(logger);
app.use(addHeader);

app.use("/route1", (req, res, next) => {
    const array = [];
    for (let i = 0; i < 10000; i++) {
        array.unshift(i);
    }
    next();
    console.log("aaaaaaa");
});

app.use("/", (req, res) => {
    const array = [];
    for (let i = 0; i < 10000; i++) {
        array.unshift(i);
    }
    res.send(array);
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
