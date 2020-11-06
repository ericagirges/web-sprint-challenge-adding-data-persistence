const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
    Projects.findAllProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
});

router.get("/:projectId", (req, res) => {
    Projects.findProjectById(req.params.projectId)
    .then(project => {
        if(!project){
            res.status(404).json({ message: "Unable to find project that matches given id." })
        } else {
            res.status(200).json(project)
        }
    }) .catch(error => {
        res.status(500).json({ error: error.message })
    })
});

router.post("/", (req, res) => {
    const newProjectData = req.body
    Projects.addProject(newProjectData)
    .then(newProject => {
        if(!newProject.name || !newProject.completed){
            res.status(400).json({ message: "Please provide a name and completion status for the project." })
        } else {
            res.status(201).json(newProject)
        }
    }) .catch(error => {
        res.status(500).json({ error: error.message })
    })
});

module.exports = router;