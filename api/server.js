const express = require('express')
const Physicist = require('./helperFunctions')

const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' })
})

// Get physicits from database
server.get('/api/physicists', (req, res) => {
    Physicist.getAll()
        .then(physicists => {
            res.status(201).json(physicists)
        })
        .catch(() => {
            res.status(500).json({ message: 'Physicists could not be retrieved'})
        })
})

// Get physicist by id
server.get('/api/physicists/:id', (req, res) => {
    Physicist.getById(req.params.id)
        .then(physicist => {
            res.status(201).json(physicist)
        })
        .catch(() => {
            res.status(500).json({ message: 'Physicist could not be retrieved'})
        })
})

// Add Physicist to database
server.post('/api/physicists', (req, res) => {
    Physicist.postPhysicist(req.body)
        .then(newPhysicist => {
            res.status(201).json(newPhysicist)
        })
        .catch(() => {
            res.status(500).json({ message: 'Physicist could not be posted'})
        })
})

// Delete Physicist from database
server.delete('/api/physicists/:id', (req, res) => {
    Physicist.deletePhysicist(req.params.id)
        .then(() => {
            res.status(201).json({ message: 'Physicist was deleted'})
        })
        .catch(() => {
            res.status(500).json({ message: 'Physicist could not be deleted'})
        })
})

module.exports = server