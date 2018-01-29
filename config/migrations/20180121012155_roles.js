
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('roles',function (table) {
            table.increments('id').primary();
            table.string('label');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('roles')
    ])
};
