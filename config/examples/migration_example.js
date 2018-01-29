exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('roles',function (table) {
            table.increments('id').primary();
            table.string('label');
        })
    ])
        .then(function () {
            return knex('roles').insert([
                {id: 1, label: 'Admin'},
                {id: 2, label: 'User'}
            ]);
        });
};
exports.down=function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('roles')
    ])
};