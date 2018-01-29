
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
        return Promise.all([
            knex('users').insert({
                role_id: 1,
                first_name: 'John',
                last_name: 'Dou',
                email: 'john.dou@gmail.com',
            }),
            knex('users').insert({
                role_id: 2,
                first_name: 'Jane',
                last_name: 'Dou',
                email: 'jane.dou@gmail.com',
            }),
        ]);
    });
};
