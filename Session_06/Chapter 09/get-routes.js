import express from "express";

const router = express.Router();

import Task from "./task.js";

router.get("/", (req, res) => {
    const tasks = Task.getAllTasks();
    res.send(`
        <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <title>Task Manager App</title>
    </head>
    <body>
        <div class="container">
            <div class="row mb-3">
                <div class="col">
                    <h1 class="text-center mt-3">Task Manager App</h1>
                </div>
            </div>

            <div class="row mb-4">
                <div class="col">
                    <form action="/add-task" method="post" class="p-2 rounded-3 border">
                        <div class="input-group input-group-lg">
                            <input
                                type="text"
                                name="title"
                                class="form-control shadow-none"
                                placeholder="Enter a new title"
                            />
                            <button class="btn btn-primary shadow-none" type="submit">
                                Add new task
                            </button>
                        </div>
                        <div class="form-check mt-1 mb-0">
                            <input
                                class="form-check-input shadow-none"
                                type="checkbox"
                                name="completed"
                                id="my-checkbox"
                            />
                            <label class="form-check-label user-select-none" for="my-checkbox">
                                The task is completed.
                            </label>
                        </div>
                    </form>
                </div>
            </div>

            <div class="row mb-4">
                <div class="col">
                <ul class="list-group lh-lg">
                ${tasks
                    .map((item) => {
                        const str = `                 
                        <li class="list-group-item d-flex bg-light" data-id="${item.id}">
                            <span class="flex-grow-1 d-flex align-items-center">
                                <label>${item.title}</label>
                                <span class="badge  ${
                                    item.completed ? "bg-success" : "bg-secondary"
                                } ms-auto me-3 user-select-none"
                                    >${item.completed ? "Completed" : "In Progress"}</span
                                >
                            </span>
                            <button class="btn btn-sm ${
                                !item.completed ? "btn-success" : "btn-secondary"
                            } me-3 toggle-btn">Toggle</button>
                            <button class="btn btn-sm btn-primary me-3 edit-btn">Edit</button>
                            <button class="btn btn-sm btn-danger delete-btn">Delete</button>
                        </li>`;
                        return str;
                    })
                    .join("\n")}


                    </ul>
                </div>
            </div>
        </div>
        <script src="js/axios.js"></script>
        <script src="js/scripts.js"></script>
    </body>
</html>

        `);
});

export default router;
