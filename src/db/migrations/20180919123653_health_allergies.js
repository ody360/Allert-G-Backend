
exports.up = knex => {
  return knex.schema.createTable('health_allergies', table => {
    table.increments()
    table.integer('health_id').notNullable()
    table
      .foreign('health_id')
      .references('health.id')
      .onDelete('CASCADE')
    table
      .integer('allergies_id')
      .references('allergies.id')
      .onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('health_allergies')
}
