$(document).ready(() => {
  console.log('js running');
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  const d1 = $.get('/api/user_data');
  const d2 = $.get('/api/note_data');

  $.when(d1, d2).then((v1, v2) => {
    $('.member-name').text(v1[0].email);
    // console.dir(v1[0]);
    // console.dir(v2[0]);
    v2[0].forEach((element) => {
      console.log(element.id);
      console.log(element.title);
      console.log(element.body);
    });
  });

  // hydrate page with note data
  $('.logout').on('click', function() {
    window.location.replace('/logout');
  });
});
