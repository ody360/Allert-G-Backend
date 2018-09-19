exports.seed = async knex => {
  await knex('health_allergies').del()
  await knex('users_child').del()
  await knex('users_party').del()
  await knex('party').del()
  await knex('health').del()
  await knex('allergies').del()
  await knex('users').del()
  await knex('medication').del()
  await knex('medhx').del()
}
