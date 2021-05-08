const router = require('express').Router();
const { User } = require('../../models');

router.get('/manageStudents', (req, res) => {
    // if (req.session.logged_in) {
    //   res.redirect('/');
    //   return;
    // }
    res.render('manageStudents');
  });
  

router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.user_id,
      email: req.body.first_name,
      password: req.body.last_name,
      password: req.body.username,
      password: req.body.password,
      password: req.body.email,
      password: req.body.is_teacher,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
    try {
      const userData = await User.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


