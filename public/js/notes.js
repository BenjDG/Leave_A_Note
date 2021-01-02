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

  // hydrate page

  const $notesSection = $('#notes-section');
  const $card = $('<div>').attr(
    'class',
    'tile is-4 is-child box is-flex is-flex-direction-column is-justify-content-space-between'
  );
  const $cardTitle = $('<div>').attr('class', 'title');
  const $cardBody = $('<p>');
  // const $cardBtnDelete;
  // const $cardBtnEdit;
  const $span = $('<span>').attr('class', 'icon is-medium');
  const $iconSave = $('<i>').attr('class', 'far fa-save');
  const $cardBtn = $('<button>').attr(
    'class',
    'button is-primary is-rounded is-large m-5 p-5 is-align-self-flex-end'
  );
  $notesSection.append($card);
  $card.append($cardTitle);
  $card.append($cardBody);
  
  $span.append($iconSave);
  $
  $card.append($cardBtn);

  $notesSection.append($card);

  // hydrate page with note data
  $('.logout').on('click', function() {
    window.location.replace('/logout');
  });
});
