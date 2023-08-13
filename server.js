import express from 'express'

const server = express()
const port = 3200

const startServer = async () => {
    try {
        server.listen(port, () => {
            console.log("Server running and listening on port:", port)
        })
    } catch(error) {
        throw new Error(error.message)
    }
}

startServer()