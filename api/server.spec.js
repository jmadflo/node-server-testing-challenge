const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

beforeEach(async () => {
    await db('physicists').truncate()
})

describe('physicists', () => {
    describe('get request to /api/physicists', () => {
        it('should return an array', () => {
            return request(server)
                .get('/api/physicists')
                .then(response => {
                    expect(Array.isArray(response.body)).toBe(true)
                })
        })
        it('should return a status 201', () => {
            return request(server)
                .get('/api/physicists')
                .then(response => {
                    expect(response.status).toBe(201)
                })
        })
    })
    describe('post request', () => {
        // get back the object we posted
        it('should return an object with a property name equal to the one we posted', () => {
            return request(server)
                .post('/api/physicists')
                .send({
                    name: 'Max Planck'
                })
                .then(response => {
                    // console.log(response)
                    expect(response.body.name).toBe('Max Planck')
                })
        })
        it('should return a status 201', () => {
            return request(server)
                .post('/api/physicists')
                .send({
                    name: 'Max Planck'
                })
                .then(response => {
                    // console.log(response)
                    expect(response.status).toBe(201)
                })
        })
    })
    describe('delete request', () => {
        let postedPhysicist = {}
        // create a post that our delete request will delete
        beforeEach(async () => {
            postedPhysicist = await request(server)
            .post('/api/physicists')
            .send({
                name: 'Max Planck'
            })
        })
        it('should return a message stating that the physicist was deleted', async () => {
            expect(postedPhysicist.body.name).toBe('Max Planck')
            // delete the post we just added
            const response = await request(server)
                .delete(`/api/physicists/${postedPhysicist.body.id}`)
            expect(response.body.message).toBe('Physicist was deleted')
        })
        it('should return a status 201', async () => {
            expect(postedPhysicist.body.name).toBe('Max Planck')
            // delete the post we just added
            const response = await request(server)
                .delete(`/api/physicists/${postedPhysicist.body.id}`)
            expect(response.status).toBe(201)
        })
    })
})