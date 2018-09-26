const table = 'party'
exports.seed = knex => {
  return knex(table)
    .insert([
      {
        id: 1,
        name: 'Superfriends'

      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}