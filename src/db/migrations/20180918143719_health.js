
exports.up = knex => {
  return knex.schema.createTable('health', table => {
    table.increments()
    table.integer('users_id').notNullable()
    table.foreign('users_id').references('users.id').onDelete('CASCADE')
    table.integer('medhx_id').notNullable()
    table.foreign('medhx_id').references('medhx.id').onDelete('CASCADE')
    table.integer('medication_id').notNullable()
    table.foreign('medication_id').references('medication.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('health')
}
