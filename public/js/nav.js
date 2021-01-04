
$(document).ready(function () {
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
