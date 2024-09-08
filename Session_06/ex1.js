import express from "express";

const app = express();


app.use("/route1", (req, res, next) => {
    next();
    console.log("Hello from first /route1");
});


app.use("/route1", (req, res, next) => {
    console.log("Hello from first /route1");
    // res.send("Hello from first /route1");
    next();
});

app.use("/route1", (req, res) => {
    console.log("Hello from first /route1");
    res.send("Hello from first /route1");
});

app.use("/route2", (req, res) => {
    console.log("Hello from first /route2");
    res.send("Hello from first /route2");
});

app.use("/", (req, res) => {
    console.log("Hello from /");
    res.send("Hello from /");
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
