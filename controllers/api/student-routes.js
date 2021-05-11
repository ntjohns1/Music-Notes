const router = require('express').Router();
const { User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userStudent = await User.findAll({
            include: [{ model: Comment }],
        });
        res.status(200).json(userStudent);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userStudent = await User.findByPk(req.params.id, {
            include: [{ model: Comment }],
        });

        if (!userStudent) {
            res.status(404).json({ message: 'No Student found with that id!' });
            return;
        }

        res.status(200).json(userStudent);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            where: {
                user_id: req.params.id,
            },
        });

        if (!userData) {
            res.status(404).json({ message: 'No student found with that id!' });
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                user_id: req.params.id,
            },
        });

        if (!userData) {
            res.status(404).json({ message: 'No studet=nt found with that id!' });
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;