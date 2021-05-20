const router = require('express').Router();
const { User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    res.render('portal')
  } catch (error) {
    res.render('homepage')
  }
})

router.get('/login', withAuth, async (req, res) => {
  try {
    res.render('portal')
  } catch (error) {
    res.render('login');
  }
});

router.get('/signup', withAuth, async (req, res) => {
  try {
    res.render('portal')
  } catch (error) {
    res.render('signup');
  }
});

router.get('/logout', withAuth, async (req, res) => {
  try {
    res.render('portal')
  } catch (error) {
    res.render('homepage')
  }
});

router.get('/portal', withAuth, async (req, res) => {
  try {
    res.render('portal')
  } catch (error) {
    res.render('login')
  }
})

router.get('/students', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll().catch((err) => {
      res.json(err);
    });
    const users = userData.map((user) => user.get({ plain: true }));
    const students = users.filter(teacher => teacher.is_teacher == 0);

    res.render('students', { students });

  } catch (error) {
    res.render('login');
  }
});

router.get('/schedule', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll().catch((err) => {
      res.json(err);
    });
    const users = userData.map((user) => user.get({ plain: true }));
    const students = users.filter(teacher => teacher.is_teacher == 0);
    res.render('schedule', { students });

  } catch (error) {
    res.render('login');
  }
});

router.get('/calendar', withAuth, async (req, res) => {
  try {
    res.render('calendar')
  } catch (error) {
    res.render('login')
  }
})

router.get('/comments', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll().catch((err) => {
      res.json(err);
    });
    const users = userData.map((user) => user.get({ plain: true }));
    const commentData = await Comment.findAll().catch((err) => {
      res.json(err);
    });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    const students = users.filter(teacher => teacher.is_teacher == 0);
    res.render('comment', { students, comments });
  
  } catch (error) {
    res.render('login')
  }
});

module.exports = router;
