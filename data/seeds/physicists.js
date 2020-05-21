
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('physicists').del()
    .then(function () {
      // Inserts seed entries
      return knex('physicists').insert([
        {id: 1, name: 'Isaac Newton'},
        {id: 2, name: 'Albert Einstein'},
      ])
    })
}
