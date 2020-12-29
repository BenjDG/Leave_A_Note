// Requiring path to so we can use relative routes to our HTML files

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const router = require('express').Router();

router.get('/', (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect('/members');
  }
<<<<<<< HEAD
res.render("signup");
  //res.sendFile(path.join(__dirname, '../../public/signup.html'));
=======

  // res.sendFile(path.join(__dirname, '../../public/signup.html'));
  res.render('signup');
>>>>>>> 5568954c6881d8107e46d18274032271c90e3379
});

router.get('/login', (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect('/members');
  }
<<<<<<< HEAD
res.render("login");
  //res.sendFile(path.join(__dirname, '../../public/login.html'));
=======

  // res.sendFile(path.join(__dirname, '../../public/login.html'));
  res.render('login');
>>>>>>> 5568954c6881d8107e46d18274032271c90e3379
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get('/members', isAuthenticated, (_req, res) => {
<<<<<<< HEAD
  //res.sendFile(path.join(__dirname, '../../public/members.html'));
  res.render("members");
=======
  // res.sendFile(path.join(__dirname, '../../public/members.html'));
  res.render('members');
>>>>>>> 5568954c6881d8107e46d18274032271c90e3379
});

module.exports = router;
