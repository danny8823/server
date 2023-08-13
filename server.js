import express from 'express'
import { db } from './db/db.js'
import Event from './db/models/eventModels.js'
const server = express()
const port = 3200

server.use(express.json())
server.use(express.urlencoded({extended:true}))
// server.use('/api',)
const startServer = async () => {
    try {
        server.listen(port, () => {
            console.log("Server running and listening on port:", port)
        })
        await db.authenticate()
        await db.sync({force:true})
        await Event.create({
            title: 'testing 123',
            description: 'this is a test',
            startDate: new Date(2023,8,1,20,0,0),
            endDate: new Date(2023,8,1,22,30,0)
        })
        console.log('database connected')
    } catch(error) {
        throw new Error(error.message)
    }
}

startServer()