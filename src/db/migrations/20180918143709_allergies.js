
exports.up = knex => {
  return knex.schema.createTable('allergies', table => {
    table.increments()
    table.string('allergy_name').unique().notNullable()
    table.boolean('checked').defaultsTo(false)
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('allergies')
}
