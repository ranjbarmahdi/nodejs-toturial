import express from "express";

import homeRoutes from "./home-routes.js";
import adminRoutes from "./admin-routes.js";
import userRoutes from "./user-routes.js";

const app = express();

app.use((req, res, next) => {
    console.clear();
    next();
});

app.use("/", homeRoutes);
app.use("/", adminRoutes);
app.use("/", userRoutes);

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
