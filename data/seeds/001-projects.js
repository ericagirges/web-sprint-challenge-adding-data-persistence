exports.seed = function (knex) {
  const Projects = [
    {
      name: "History Report on Civil War", // id: 1
      description: "5 page report on the Civil War in America",
      completed: false 
    },
    {
      name: "Volcano Science Project", // id: 2
      description: "Demonstrate the eruption of a volcano",
      completed: false
    },
    {
      name: "Ender's Game Book Report", // id: 3
      description: "3 page book report on Ender's Game",
      completed: false
    },
  ];

  return knex("Projects").insert(Projects);
};
