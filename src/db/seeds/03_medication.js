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

      },
      {
        id: 3,
        users_id: 3,
        medication: 'lorazapam'
      },
      {
        id: 4,
        users_id: 4,
        medication: 'Dimethylphenidate'
      },
      {
        id: 5,
        users_id: 5,
        medication: 'Losartanm Amlodipine'
      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}
