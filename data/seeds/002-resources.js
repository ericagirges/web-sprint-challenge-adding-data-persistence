exports.seed = function (knex) {
  const Resources = [
    {
      name: "laptop", // id: 1
      description: ""
    },
    {
      name: "library", // id: 2
      description: ""
    },
    {
      name: "Wikipedia", // id: 3
      description: ""
    },
    {
      name: "Google Drive", // id: 4
      description: "to create report and keep track of research"
    },
    {
      name: "Craft Supplies", // id: 5
      description: "Cardboard, markers, posterboard"
    },
    {
      name: "Tutor", // id: 6
      description: "reach out for assistance as needed"
    },
    {
      name: "Ender's Game Book", // id: 7
      description: ""
    },
  ];

  return knex("Resources").insert(Resources);
};
