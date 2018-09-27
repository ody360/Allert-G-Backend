const table = 'health_allergies'
exports.seed = knex => {
  return knex(table).insert([
    {
      health_id: 1,
      allergies_id: 3,
    },
    {
      health_id: 1,
      allergies_id: 1,
    },
    {
      health_id: 2,
      allergies_id: 4,
    },
    {
      health_id: 2,
      allergies_id: 2,
    }
  ])
}
