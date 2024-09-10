import express from "express";

const app = express();

app.use((req, res, next) => {
    console.clear();
    next();
});

app.get("/book", (req, res) => {
    res.send("A GET request received.");
});

app.post("/book", (req, res) => {
    res.send("A POST request received.");
});

app.put("/book", (req, res) => {
    res.send("A PUT request received.");
});

app.route("/book")
    .get((req, res) => {
        res.send("A GET request received.");
    })
    .post((req, res) => {
        res.send("A POST request received.");
    })
    .put((req, res) => {
        res.send("A PUT request received.");
    });

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
