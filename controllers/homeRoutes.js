const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    if(req.session.logged_in) {
        res.render('portal')
    } else{
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

  router.get('/portal', async (req, res) => {
    if(req.session.logged_in) {
        res.render('portal')
    } else{
        res.render('login')

    }
})

router.get('/students', async (req, res) => {
    if (req.session.logged_in) {
      const userData = await User.findAll().catch((err) => {
        res.json(err);
      });
      const users = userData.map((user) => user.get({ plain: true }));
      const students = users.filter(teacher => teacher.is_teacher == 0);
      res.render('students', { students });
  
        return;
    } else {
      res.render('login');
    }
});

router.get('/schedule', async (req, res) => {
    if (req.session.logged_in) {
      const userData = await User.findAll().catch((err) => {
        res.json(err);
      });
      const users = userData.map((user) => user.get({ plain: true }));
      const students = users.filter(teacher => teacher.is_teacher == 0);
      res.render('schedule', { students });
        return;
    }
    
    res.render('login');
});

router.get('/calendar', async (req, res) => {
    if (req.session.logged_in) {
        res.render('calendar')
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
