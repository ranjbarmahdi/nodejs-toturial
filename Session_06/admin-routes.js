import express from "express";

const router = express.Router();

router
    .route("/admin")
    .get((req, res) => {
        res.send("A GET request received for /admin");
    })
    .post((req, res) => {
        res.send("A POST request received for /admin");
    });

router
    .route("/admin/route1")
    .get((req, res) => {
        res.send("A GET request received for /admin/route!");
    })
    .post((req, res) => {
        res.send("A POST request received for /admin/route!");
    });

export default router;
