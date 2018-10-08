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

      },
      {
        id: 3,
        users_id: 3,
        medhx: 'PTSD, PMS'
      },
      {
        id: 4,
        users_id: 4,
        medhx: ''
      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}
