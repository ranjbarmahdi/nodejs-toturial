import express from "express";
import Task from "./task.js";
import DB from "./db.js";

const router = express.Router();

router.post("/add-task", (req, res) => {
    let { completed, title } = req.body;
    completed = completed ? true : false;
    if (title && title.length > 3) {
        try {
            const newTask = new Task(title, completed);
            newTask.save();
            res.redirect("/");
        } catch (error) {
            res.status(400).send(`<h1>${error.message}</h1>`);
        }
    } else {
        res.status(400).send("<h1>Invalid request.</h1>");
    }
});

router.post("/toggle-task", (req, res) => {
    let { id } = req.body;
    console.log(id);
    if (id) {
        const task = Task.getTaskById(id);
        if (!task) {
            res.status(404).send("<h1>Task not found</h1>");
            return false;
        }
        task.completed = !task.completed;
        task.save();
        // res.redirect("/");
        return true;
    } else {
        res.status(400).send("<h1>Invalid request.</h1>");
        return false;
    }
});

router.post("/edit-task", (req, res) => {
    let { id, title } = req.body;
    console.log(id);
    if (id && title) {
        const task = Task.getTaskById(id);
        if (!task) {
            res.status(404).send("<h1>Task not found</h1>");
            return false;
        } else {
            try {
                task.title = title;
                task.save();
                return true;
            } catch (error) {
                res.status(404).send("<h1>Task not found</h1>");
            }
        }
    } else {
        res.status(400).send("<h1>Invalid request.</h1>");
        return false;
    }
});


router.post("/delete-task", (req, res) => {
    let { id } = req.body;
    console.log(id);
    if (id ) {
        const task = Task.getTaskById(id);
        if (!task) {
            res.status(404).send("<h1>Task not found</h1>");
            return false;
        } else {
            try {
                DB.deleteTask(id);
                return true;
            } catch (error) {
                res.status(404).send(`<h1>${error.message}</h1>`);
            }
        }
    } else {
        res.status(400).send("<h1>Invalid request.</h1>");
        return false;
    }
});

export default router;
