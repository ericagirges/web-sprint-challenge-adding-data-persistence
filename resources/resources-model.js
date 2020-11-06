const db = require("../data/db-config.js");

module.exports = {
    findAllResources,
    addResource,
    findResourceById,
  };

  function findAllResources() {
    return db("Resources");
  }
  
  function findResourceById(id) {
    return db("Resources").where({ id }).first();
  }
  
  function addResource(newResouce) {
    return db("Resources")
      .insert(newResouce)
      .then((ids) => {
        const id = ids[0];
        return findResourceById(id);
      });
  }