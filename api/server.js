const express = require('express');
const helmet = require("helmet");

const ProjectRouter = require("../projects/projects-router");
const ResourceRouter = require("../resources/resources-router");
const TaskRouter = require("../tasks/tasks-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/tasks", TaskRouter);

server.get("/", (req, res) => {
    res.status(200).json({ Hello: "Welcome to the Project Planning API"})
})

module.exports = server;