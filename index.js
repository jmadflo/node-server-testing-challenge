const server = require('./api/server')

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})