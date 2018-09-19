
exports.up = knex => {
  return knex.schema.createTable('users_child', table => {
    table.increments()
    table.integer('users_id').notNullable()
    table
      .foreign('users_id')
      .references('users.id')
      .onDelete('CASCADE')
    table.integer('child_id').notNullable()
    table
      .foreign('child_id')
      .references('child.id')
      .onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('users_child')
}
