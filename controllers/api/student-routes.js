const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userStudent = await User.findAll({
        });
        res.status(200).json(userStudent);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/comments', async (req, res) => {
    try {
        const user = await User.findAll({
        });
        res.status(200).json(user);
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
        const userData = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            is_teacher: req.body.is_teacher,
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const userData = await User.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

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
                id: req.params.id,
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

module.exports = router;