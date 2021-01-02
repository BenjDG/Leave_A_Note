const router = require("express").Router();
// Requiring our models and passport as we've configured it
const db = require("../../models");
const passport = require("../../config/passport");

function loginCheck(req, res) {
  // If user is not logged in, send back an empty object
  if (!req.user) {
    return res.json({});
  }
}
// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/login", passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id,
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", (req, res) => {
  db.User.create(req.body)
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

// Route for getting some data about our user to be used client side
router.get("/user_data", (req, res) => {
  loginCheck(req, res);
  // Otherwise send back the user's email and id
  // Sending back a password, even a hashed password, isn't a good idea
  const { password, ...user } = req.user;
  res.json(user);
});

// Route for getting data about notes to be used client side
router
  .route("/note_data")
  .get((req, res) => {
    loginCheck(req, res);
    // Otherwise, send back the user's note
    db.Note.findAll().then((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  })
  .post((req, res) => {
    loginCheck(req, res);
    //Create a note
    db.Note.create({
      title: req.title,
      body: req.body,
    });
  });

module.exports = router;
