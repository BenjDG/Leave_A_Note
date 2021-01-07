$(document).ready(() => {
  const $notesSection = $('#notes-section');

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  const d1 = $.get('/api/get_my_group_name');
  const d2 = $.get('/api/view_my_group_notes');

  $.when(d1, d2).then((v1, v2) => {
    $('#group-name').text(`Group: ${v1[0].GroupName}`);
    v2[0].forEach(e => {
      const fn = e.first_name;
      const ln = e.last_name;
      const em = e.email;
      e.Notes.forEach(f => {
        renderCardFactory(f.title, f.body, fn, ln, em);
      });
    });
  });

  $('.logout').on('click', function () {
    window.location.replace('/logout');
  });

  function renderCardFactory (title, body, fn, ln, em) {
    // individual cards
    const $card = $('<div>').attr(
      'class',
      'tile is-4 is-child box is-flex is-flex-direction-column is-justify-content-space-between'
    );
    // card owner
    const $ownerN = $('<p>').text(`${fn} ${ln}`);
    const $ownerEm = $('<p>').text(em);
    const $box = $('<div>').attr('class', 'box');
    $box.append($ownerN);
    $box.append($ownerEm);

    // card title
    const $cardTitle = $('<p>')
      .attr('class', 'title')
      .text(title);
    // card body
    const $cardBody = $('<p>').attr('class', 'pb-5').text(body);

    const $cardContent = $('<div>').attr('class', 'card-content');
    $cardContent.append($cardTitle);
    $cardContent.append($cardBody);
    $cardContent.append($box);

    // attach card content
    $card.append($cardContent);

    // attach card to section
    $notesSection.append($card);
  }
});
