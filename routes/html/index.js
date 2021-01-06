// Requiring path to so we can use relative routes to our HTML files

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const router = require('express').Router();

router.get('/', (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect('/notes');
  }
  res.render('login');
});

router.get('/login', (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect('/notes');
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect('/notes');
  }
  res.render('signup');
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get('/notes', isAuthenticated, (_req, res) => {
  res.render('notes');
});

router.get('/profile', isAuthenticated, (_req, res) => {
  res.render('profile');
});

router.get('/group-notes', isAuthenticated, (_req, res) => {
  res.render('groupNotes');
});

module.exports = router;
