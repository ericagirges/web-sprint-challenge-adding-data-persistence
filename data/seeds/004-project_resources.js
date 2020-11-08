exports.seed = function (knex) {
  const ProjectResources = [
    {
      project_id: 3, // id: 1
      resource_id: 4
    },
    {
      project_id: 2, // id: 2
      resource_id: 5
    },
    { 
      project_id: 2, // id: 3
      resource_id: 1
    },
    {
      project_id: 3, // id: 4
      resource_id: 7
    },
    {
      project_id: 1, // id: 5
      resource_id: 2
    },
    {
      project_id: 1, // id: 6
      resource_id: 6
    },
    { 
      project_id: 3, // id: 7
      resource_id: 1
    },
    {
      project_id: 1, // id: 8
      resource_id: 1
    },
    {
      project_id: 1, // id: 9
      resource_id: 3
    },
  ];

  return knex("ProjectResources").insert(ProjectResources);
};
