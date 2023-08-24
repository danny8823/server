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

router.get('/:title', async (req,res,next) => {
    try{
        const {title} = req.params
        const event = await Event.findOne({
            where: {
                title: title
            }
        })
        res.send(event)
    } catch(error) {
        res.status(404).send(error.message)
    }
})

router.post('/', async (req,res,next) => {
    try {
        const {title, desc ,start, end} = req.body

        const events = await Event.create({
            title: title,
            description: desc,
            startDate : start,
            endDate : end,
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

router.delete('/', async(req,res,next) => {
    try {
        const {title} = req.query
        const event = await Event.findOne({
            where: {
                title: title
            }
        })
        await event.destroy()
        res.send(event)
    } catch (error) {
        throw new Error(error)
    }
})

export default router