const db = require('../data/dbConfig')

module.exports = {
    getAll,
    postPhysicist,
    deletePhysicist,
    getById
}

function getAll(){
    return db('physicists')
}

function postPhysicist(physicist){
    return db('physicists')
        .insert(physicist, 'id')
        .then(id => {
            return getById(id[0])
        })
}

function deletePhysicist(id){
    return db('physicists')
        .where({ id })
        .del()
}

function getById(id){
    return db('physicists')
        .where({ id })
        .first()
}