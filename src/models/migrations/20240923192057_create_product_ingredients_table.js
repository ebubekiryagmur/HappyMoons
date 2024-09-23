/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('product_ingredients', (table) => {    
        table.integer('product_id').references('id').inTable('products').onDelete('CASCADE');
        table.integer('ingredient_id').references('id').inTable('ingredients').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ingredients');
};
