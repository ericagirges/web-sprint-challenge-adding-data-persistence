const express = require("express");

const Tasks = require("./tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
    Tasks.findAllTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    }) .catch(error => {
        res.status(500).json({ error: error.message })
    })
});

router.get("/:taskId", (req, res) => {
    Tasks.findTaskById(req.params.taskId)
    .then(task => {
        if(!task){
            res.status(404).json({ message: "Unable to find task that matches given id." })
        } else {
            res.status(200).json(task)
        }
    }) .catch(error => {
        res.status(500).json({ error: error.message })
    })
});

router.post("/", (req, res) => {
    const newTaskData = req.body
    Tasks.addTask(newTaskData)
    .then(newTask => {
        if(!newTask.description){
            res.status(400).json({ message: "Please provide a name for the task." })
        } else {
            res.status(201).json(newTask)
        }
    }) .catch(error => {
        res.status(500).json({ error: error.message })
    })
});

module.exports = router;