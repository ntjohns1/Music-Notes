const router = require('express').Router();
const {insertNewEvent, deleteEvent} = require('../../utils/calendar');
const { Event, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userEvent = await Event.findAll({
            include: [{ model: User }],
        });
        res.status(200).json(userEvent);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userEvent = await Event.findByPk(req.params.id, {
            include: [{ model: User }],
        });

        if (!userEvent) {
            res.status(404).json({ message: 'No event found with that id!' });
            return;
        }

        res.status(200).json(userEvent);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userEvent = await Event.create({
            year: req.body.year,
            month: req.body.month,
            day: req.body.day,
            hour: req.body.hour,
            summary: req.body.summary,
            description: req.body.description,
            user_id: req.body.studentId,
        });
        res.status(200).json(userEvent);
    } catch (err) {
        res.status(400).json(err);
    };

    insertNewEvent(req.body.year, req.body.month, req.body.day, req.body.hour, req.body.summary, req.body.description);
});

router.put('/:id', async (req, res) => {
    try {
        const eventData = await Event.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!eventData) {
            res.status(404).json({ message: 'No event found with that id!' });
            return;
        }
        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {

    try {
        const eventData = await Event.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!eventData) {
            res.status(404).json({ message: 'No event found with that id!' });
            return;
        }
        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
    deleteEvent(req.body.calendar_id);
});

module.exports = router;