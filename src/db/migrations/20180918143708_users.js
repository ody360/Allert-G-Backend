exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('first_name', 50).notNullable()
    table.string('last_name', 50).notNullable()
    table.string('email', 100).notNullable()
    table.text('password').notNullable()
    table.date('birthdate').notNullable()
    table.string('sex', 5).notNullable()
    table.string('home_phone', 15).notNullable()
    table.string('cell_phone', 15).notNullable().defaultsTo('')
    table.string('emergency1', 15).notNullable().defaultsTo('')
    table.string('emergency2', 15).notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('users')
}
