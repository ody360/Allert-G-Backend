
exports.up = knex => {
    return knex.schema.createTable('users_party', table => {
        table.increments()
        table.integer('party_id').references('party.id')
        table.integer('users_id').references('users.id');
        table.timestamps(true, true)
    })
};

exports.down = knex => {
    return knex.schema.dropTable('users_party');
};
