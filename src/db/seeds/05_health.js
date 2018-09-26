const table = 'health'
exports.seed = knex => {
  return knex(table)
    .insert([
      {
        id: 1,
        users_id: 1,
        medhx_id: 1,
        medication_id: 1,

      },
      {
        id: 2,
        users_id: 2,
        medhx_id: 2,
        medication_id: 2,

      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}