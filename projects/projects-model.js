const db = require("../data/db-config.js");

module.exports = {
  findAllProjects,
  addProject,
  findProjectById,
  findAllResources,
  addResource,
  findResourceById,
  findAllTasks,
  addTask,
  findTaskById,
};

function findAllProjects() {
  return db("Projects");
}

function findProjectById(id) {
  return db("Projects").where({ id }).first();
}

function addProject(newProject) {
  return db("Projects")
    .insert(newProject, id)
    .then((ids) => {
      const id = ids[0];
      return findProjectById(id);
    });
}

function findAllResources() {
  return db("Resources");
}

function findResourceById(id) {
  return db("Resources").where({ id }).first();
}

function addResource(newResouce) {
  return db("Resources")
    .insert(newResouce, id)
    .then((ids) => {
      const id = ids[0];
      return findResourceById(id);
    });
}

function findAllTasks() {
  return db("Tasks as t")
    .join("Projects as p", "t.projects_id", "=", "p.id")
    .select("t.id", "t.description", "t.notes", "p.name", "p.description");
}

function findTaskById(id) {
  return db("Tasks").where({ id }).first();
}

function addTask(newTask) {
  return db("Tasks")
    .insert(newTask, id)
    .then((ids) => {
      const id = ids[0];
      return findTaskById(id);
    });
}
