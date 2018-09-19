
exports.up = knex => {
  return knex.schema.createTable('medhx', table => {
    table.increments()
    table.string('history').defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('medhx')
}
