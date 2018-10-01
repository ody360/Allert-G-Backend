const table = 'medication'
exports.seed = knex => {
  return knex(table)
    .insert([
      {
        id: 1,
        users_id: 1,
        medication: 'losartan, amlodipine, pravastatin'

      },
      {
        id: 2,
        users_id: 2,
        medication: 'acetominophen, amoxicillin'

      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}
