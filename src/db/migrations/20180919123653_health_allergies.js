
exports.up = knex => {
  return knex.schema.createTable("health_allergies", table => {
    table.increments();
    table.integer("health_id").references("health.id");
    table.integer("allergies_id").references("allergies.id");
    table.timestamps(true, true);
  });
};

exports.down = knex => {
  return knex.schema.dropTable("allergylist");
};