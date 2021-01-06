$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $('form.login');
  const emailInput = $('input#email-input');
  const passwordInput = $('input#password-input');
  let i = 0;

  const errMess = [
    'Email and password must not be left blank.',
    'Check your email and password',
    'Did you leave your email and password blank?',
    "I'm going to tell Al Gore that you left your email and/or password blank!!!"
  ];

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on('submit', event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      if (i < errMess.length) {
        errorMessage(errMess[i]);
        i++;
      }
      if (i === errMess.length || i > errMess.length) {
        i = 0;
      }
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser (email, password) {
    $.post('/api/login', {
      email: email,
      password: password
    })
      .then(() => {
        emailInput.val('');
        passwordInput.val('');
        window.location.replace('/notes');
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
        if (err.status === 401) {
          errorMessage('Invalid username or password.');
        } else {
          errorMessage('Error, please refresh and try again.');
        }
      });
  }

  function errorMessage (e) {
    $('input')
      .toggleClass('is-danger')
      .toggleClass('is-primary');
    $('#error').text(e);
  }
});
