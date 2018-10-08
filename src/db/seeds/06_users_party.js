const table = 'users_party'
exports.seed = knex => {
  return knex(table)
    .insert([
      {
        id: 1,
        party_id: 1,
        users_id: 1
      },
      {
        id: 2,
        party_id: 1,
        users_id: 2
      },
      {
        id: 3,
        party_id: 1,
        users_id: 3
      },
      {
        id: 4,
        party_id: 1,
        users_id: 4
      },

    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}
