import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("A GET request received for /");
});

router.post("/", (req, res) => {
    res.send("A POST request received for /");
});

export default router;
