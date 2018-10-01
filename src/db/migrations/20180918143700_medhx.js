
exports.up = knex => {
  return knex.schema.createTable('medhx', table => {
    table.increments()
    table.integer('users_id').notNullable()
    table.foreign('users_id').references('users.id').onDelete('CASCADE')
    table.string('medhx').defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('medhx')
}
