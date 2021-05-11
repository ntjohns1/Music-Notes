const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    if(req.session.logged_in) {
        res.render('portal')
    } else{
        res.render('login')

    }
})

router.get('/students', async (req, res) => {
    if (req.session.logged_in) {
        res.render('students')
        return;
    }
    
    res.render('homepage');
});

router.get('/schedule', async (req, res) => {
    if (req.session.logged_in) {
        res.render('schedule')
        return;
    }
    
    res.render('login');
});

router.get('/comments', async (req, res) => {
  if (req.session.logged_in) {
    res.render('comment')
    return;
  }

  res.render('login');
});

module.exports = router;