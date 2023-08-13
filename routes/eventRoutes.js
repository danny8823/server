import express from 'express'
import Event from '../db/models/eventModels.js'
const router = express.Router()

router.get('/', async (req,res,next) => {
    try {
        const events = await Event.findAll()
        res.send(events)
    } catch {
        res.status(404).send()
    }
})

router.post('/', async (req,res,next) => {
    try {
        const events = await Event.create(req.body)
        res.send(events)
    } catch {
        res.sendStatus(404)
    }
})

router.put('/:id', async(req,res,next) => {
    try {
        const events = await Event.update(req.body) 
        res.send(events)
    } catch {
        res.sendStatus(404)
    }
})