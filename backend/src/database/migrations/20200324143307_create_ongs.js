
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
    table.string('id', 7).primary();
    table.string('name', 255).notNullable();
    table.string('email', 127).notNullable();
    table.string('whatsapp', 15).notNullable();
    table.string('city', 127).notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.droptable('ongs');
};
