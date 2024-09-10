import express from "express";

const app = express();

app.get("/user/", (req, res) => {
    res.send(req.query)
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
