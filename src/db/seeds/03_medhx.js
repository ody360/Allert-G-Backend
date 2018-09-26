const table = 'medhx'
exports.seed = knex => {
  return knex(table)
    .insert([
      {
        id: 1,
        history: 'CHF, HTN, DM2, SLE'

      },
      {
        id: 2,
        history: 'PTSD, insomnia'

      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}
