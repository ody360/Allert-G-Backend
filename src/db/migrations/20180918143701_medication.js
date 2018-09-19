
exports.up = knex => {
  return knex.schema.createTable("medication", table => {
    table.increments()
    table.string('medication').defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('medication')
}