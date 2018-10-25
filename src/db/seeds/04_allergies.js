const table = 'allergies'
exports.seed = knex => {
  return knex(table)
    .insert([
      {
        id: 1,
        allergy_name: 'peanuts'
      },
      {
        id: 2,
        allergy_name: 'avocados'
        

      },
      {
        id: 3,
        allergy_name: 'kryptonite'
        
      },
      {
        id: 4,
        allergy_name: 'bats'
        
      },
      {
        id: 5,
        allergy_name: 'milk'
      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}
