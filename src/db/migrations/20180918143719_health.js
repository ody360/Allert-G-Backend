
exports.up = knex => {
    return knex.schema.createTable('health', table => {
        table.increments()
        table.integer('users_id').references('users.id')
        table.integer('medhx_id').references('medhx.id')
        table.integer('medication_id').references('medication.id')
        table.timestamps(true,true)
    })
};

exports.down = knex => {
    return knex.schema.dropTable('health')
};
