const db = require("../data/db-config.js");

module.exports = {
  findAllProjects,
  addProject,
  findProjectById,
};

function findAllProjects() {
  return db("Projects");
}

function findProjectById(id) {
  return db("Projects").where({ id }).first();
}

function addProject(newProject) {
  return db("Projects")
    .insert(newProject)
    .then((ids) => {
      const id = ids[0];
      return findProjectById(id);
    });
}

