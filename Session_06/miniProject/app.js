import express from "express";

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.static("C:UsersUser1Desktop\nodejs-toturialSession_06miniProjectpublick"));

app.get("/", (req, res) => {
    const html = `
    <link rel="stylesheet" href="style.css">
    <form action="/result-page" method="post">
        <label>3 + 4 = ?</label><br/>
        <input type="text" name="result" /><br />
        <button type="submit">Submit</button>
    </form>

    `;
    res.send(html);
});

app.route("/result-page")
    .post((req, res) => {
        console.log("asdasdasd");
        if (req.body.result) {
            if (req.body.result === "7") {
                res.send("Your answer is correct");
            } else {
                res.send("Ooops!, Your answer is incorrect");
            }
        } else {
            res.status(400).send("please send a value for result.");
        }
    })
    .get((req, res) => {
        res.redirect("/");
    });

app.use("/", (req, res) => {
    res.status(400).send("<h1>Page Not Found</h1>");
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
