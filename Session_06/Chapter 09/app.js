import path from "path";

import express from "express";
import "dotenv/config";

import getRoutes from "./get-routes.js";
import postRoutes from "./post-routes.js";

import { fileURLToPath } from "url";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));


app.use(getRoutes);
app.use(postRoutes);

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
