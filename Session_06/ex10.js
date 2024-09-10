import express from "express";

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
    res.send(req.body);
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
