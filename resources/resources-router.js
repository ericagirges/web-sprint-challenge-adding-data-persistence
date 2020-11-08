const express = require("express");

const Resources = require("./resources-model");

const router = express.Router();

router.get("/", (req, res) => {
    Resources.findAllResources()
    .then(resources => {
        res.status(200).json(resources)
    }) .catch(error => {
        res.status(500).json({ error: error.message })
    })
});

router.get("/:resourceId", (req, res) => {
    Resources.findResourceById(req.params.resourceId)
    .then(resource => {
        if(!resource){
            res.status(404).json({ message: "Unable to find resource that matches given id." })
        } else {
            res.status(200).json(resource)
        }
    }) .catch(error => {
        res.status(500).json({ error: error.message })
    })
});

router.post("/", (req, res) => {
    const newResourceData = req.body
    Resources.addResource(newResourceData)
    .then(newResource => {
        if(!newResource.name){
            res.status(400).json({ message: "Please provide a name for the resource." })
        } else {
            res.status(201).json(newResource)
        }
    }) .catch(error => {
        res.status(500).json({ error: error.message })
    })
});

module.exports = router;