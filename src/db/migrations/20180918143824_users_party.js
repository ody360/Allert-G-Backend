
exports.up = knex => {
  return knex.schema.createTable('users_party', table => {
    table.increments()
    table.integer('party_id').notNullable()
    table.foreign('party_id').references('party.id').onDelete('CASCADE')
    table.integer('users_id').notNullable()
    table.foreign('users_id').references('users.id').onDelete('CASCADE')
    table.unique(['party_id','users_id'])
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('users_party')
}
