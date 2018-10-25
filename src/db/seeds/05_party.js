const table = 'party'
exports.seed = knex => {
  return knex(table)
    .insert([
      {
        id: 1,
        name: 'Superfriends'
      },
      {
        id: 2,
        name: 'Guys Coalition',
        img_URL: 'https://flipsidesf.files.wordpress.com/2013/05/justice_league_by_digitaldusty-d34sy3o.jpeg'
      }
    ])
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      )
    })
}