const db = require("../data/db-config.js");

module.exports = {
    findAllTasks,
    addTask,
    findTaskById,
};


function findAllTasks() {
    return db("Tasks as t")
      .join("Projects as p")
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