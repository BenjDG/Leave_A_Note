$(document).ready(() => {
  // Getting references to our form and input

  const signupForm = $('form.signup');
  const firstName = $('#firstname');
  const lastName = $('#lastname');
  const email = $('#email');
  const password = $('#password');
  const passwordConfirm = $('#password-confirm');

  // When the signup button is clicked, we validate the email and password, firstname , lastname are not blank
  signupForm.on('submit', event => {
    event.preventDefault();
    const userData = {
      firstName: firstName.val().trim(),
      lastName: lastName.val().trim(),
      email: email.val().trim(),
      password: password.val().trim()
    };

    if (!userData.password) {
      errorMessage('Password is missing.');
      return;
    }

    if (!userData.email) {
      errorMessage('Email is missing.');
      return;
    }

    if (!userData.firstName) {
      errorMessage('First name is missing.');
      return;
    }

    if (!userData.lastName) {
      errorMessage('Last name is missing.');
      return;
    }

    if (!nameValidator(userData.firstName)) {
      errorMessage('First name only use letters with no spaces.');
      return;
    }

    if (!nameValidator(userData.lastName)) {
      errorMessage('Last name only use letters with no spaces.');
      return;
    }

    if (password.val() !== passwordConfirm.val()) {
      errorMessage('Passwords do not match.');
      return;
    }

    // If we have an email and password , firstname and lastname, run the signUpUser function
    signUpUser(
      userData.email,
      userData.password,
      userData.firstName,
      userData.lastName
    );
    email.val('');
    password.val('');
    firstName.val('');
    lastName.val('');
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser (email, password, firstName, lastName) {
    $.post('/api/signup', {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName
    })
      .then(() => {
        window.location.replace('/notes');
        // If there's an error, handle it by throwing up a alert
      })
      .catch(handleLoginErr);
  }

  function nameValidator (n) {
    const nameRGEX = /^[a-zA-Z]+$/g;
    const result = nameRGEX.test(n);
    return result;
  }

  function handleLoginErr (err) {
    $('#alert .msg').text(err.responseJSON);
    $('#alert').fadeIn(500);
  }

  function errorMessage (e) {
    $('input')
      .toggleClass('is-danger')
      .toggleClass('is-primary');
    $('#error').text(e);
  }
});
