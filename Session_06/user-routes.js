import express from "express";

const router = express.Router();

router.get(("/user"), (req, res) => {
    res.send("A GET request received for /user");
})

router.post("/user", (req, res) => {
    res.send("A POST request received for /user");
});

router.get("/user/route1", (req, res) => {
    res.send("A GET request received for /user/route1");
});

router.post("/user/route1", (req, res) => {
    res.send("A POST request received for /user/route1");
});

export default router;