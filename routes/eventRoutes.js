import express from 'express'
import Event from '../db/models/eventModels.js'
const router = express.Router()

router.get('/', async (req,res,next) => {
    try {
        const events = await Event.findAll()
        res.send(events)
    } catch(error) {
        res.status(404).send(error.message)
    }
})

router.post('/', async (req,res,next) => {
    try {
        const {title, description, startDate, endDate, allDay} = req.body

        const events = await Event.create({
            title: title,
            description: description,
            startDate : startDate,
            endDate : endDate,
            allDay: allDay
        })
        res.send(events)
    } catch(error) {
        throw new Error(error.message)
    }
})

router.put('/:id', async(req,res,next) => {
    try {
        const events = await Event.update(req.body) 
        res.send(events)
    } catch(error) {
        res.sendStatus(404)
    }
})

export default router