
exports.up = knex => {
  return knex.schema.createTable('users_allergies', table => {
    table.increments()
    table.integer('users_id').notNullable()
    table.foreign('users_id').references('users.id').onDelete('CASCADE')
    table.integer('allergies_id').notNullable()
    table.foreign('allergies_id').references('allergies.id').onDelete('CASCADE')
    table.timestamps(true, false)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('users_allergies')
}
