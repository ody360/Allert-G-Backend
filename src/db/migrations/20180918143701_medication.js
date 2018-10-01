
exports.up = knex => {
  return knex.schema.createTable("medication", table => {
    table.increments()
    table.integer('users_id').notNullable()
    table.foreign('users_id').references('users.id').onDelete('CASCADE')
    table.string('medication').defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('medication')
}