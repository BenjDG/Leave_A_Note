$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $('.navbar-burger').click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  $('#note-nav').on('click', function () {
    window.location.replace('/notes');
  });

  $('#profile-nav').on('click', function () {
    window.location.replace('/profile');
  });

  $('#logout').on('click', function () {
    window.location.replace('/logout');
  });
});
