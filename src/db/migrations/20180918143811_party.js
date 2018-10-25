
exports.up = knex => {
  return knex.schema.createTable('party', table => {
    table.increments()
    table.string('name')
    table.string('description').defaultsTo('')
    table.string('img_URL').defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('party')
}
