const db = require("../data/db-config.js");

module.exports = {
    findAllTasks,
    addTask,
    findTaskById,
};


function findAllTasks() {
    return db("Tasks as t")
      .join("Projects as p", "t.project_id", "=", "p.id")
      .select("t.id", "t.description", "t.notes", "p.name as projectName", "p.description as projectDescription")
  }
  
  function findTaskById(id) {
    return db("Tasks").where({ id }).first();
  }
  
  function addTask(newTask) {
    return db("Tasks")
      .insert(newTask)
      .then((ids) => {
        const id = ids[0];
        return findTaskById(id);
      });
  }