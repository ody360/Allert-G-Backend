const table = 'medhx'
exports.seed = knex => {
  return knex(table)
    .insert([
      {
        id: 1,
        users_id: 1,
        medhx: 'CHF, HTN, DM2, SLE'

      },
      {
        id: 2,
        users_id: 2,
        medhx: 'PTSD, insomnia'

      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}
