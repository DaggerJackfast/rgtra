
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users',function (table) {
            table.increments('id').primary();
            table.integer('role_id');
            table.string('first_name');
            table.string('last_name');
            table.string('email');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('users')
    ])
};
