exports.up = function(knex) {
    return knex.schema.createTable('physicists', physicists => {
        physicists.increments()
        physicists.string('name', 100).notNullable()
    })
}

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('physicists')
}