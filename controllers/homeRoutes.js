const router = require('express').Router();
const { User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  if (req.session.logged_in) {
    res.render('portal')
  } else {
    res.render('homepage')

  }
})

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {

    res.render('portal')
    return;
  }

  res.render('login');
});

router.get('/signup', async (req, res) => {
  if (req.session.logged_in) {
    res.render('portal')
    return;
  }

  res.render('signup');
});

router.get('/logout', async (req, res) => {
  if (req.session.logged_in) {
    res.render('portal')
    return;
  }

  res.render('homepage');
});

router.get('/comment', async (req, res) => {
  const userData = await User.findAll().catch((err) => {
    res.json(err);
  });
  const users = userData.map((user) => user.get({ plain: true }));
  res.render('comment', { users });
});

module.exports = router;
