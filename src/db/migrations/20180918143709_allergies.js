
exports.up = knex => {
  return knex.schema.createTable('allergies', table => {
    table.increments()
    table.string('name')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('allergies')
}
