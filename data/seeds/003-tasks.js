exports.seed = function (knex) {
  const Tasks = [
    {
      description: "brainstorm main ideas", // id: 1
      notes: "",
      project_id: 3
    },
    {
      description: "sketch out volcano plans", // id: 2
      notes: "",
      project_id: 2
    },
    {
      description: "decide on materials needed", // id: 3
      notes: "",
      project_id: 2
    },
    {
      description: "write first draft", // id: 4
      notes: "",
      project_id: 3
    },
    {
      description: "online research", // id: 5
      notes: "",
      project_id: 1
    },
    {
      description: "check out library books", // id: 6
      notes: "",
      project_id: 1
    },
  ];

  return knex("Tasks").insert(Tasks);
};
