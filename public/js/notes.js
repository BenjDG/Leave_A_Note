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
      renderCardFactory();
    });
  });

  // hydrate page
  // card section
  const $notesSection = $('#notes-section');

  // const $iconSave = $('<i>').attr('class', 'far fa-save');

  function renderCardFactory () {
    // individual cards
    const $card = $('<div>').attr(
      'class',
      'tile is-4 is-child box is-flex is-flex-direction-column is-justify-content-space-between'
    );
    // card title
    const $cardTitle = $('<p>').attr('class', 'title').text('JQuery');
    // card body
    const $cardBody = $('<p>').text('Some note about JQuery.');

    const $cardContent = $('<div>').attr('class', 'card-content');
    $cardContent.append($cardTitle);
    $cardContent.append($cardBody);

    // card footer
    const $cardFooter = $('<div>').attr('class', 'card-footer');
    const $cardFooterItem1 = $('<div>').attr('class', 'card-footer-item');
    const $cardFooterItem2 = $('<div>').attr('class', 'card-footer-item');
    const $cardFooterItem3 = $('<div>').attr('class', 'card-footer-item');

    // different buttons
    // delete button

    const $iconDelete = $('<i>').attr('class', 'far fa-trash-alt');
    const $spanDel = $('<span>').attr('class', 'icon is-medium');
    const $cardBtnDel = $('<button>').attr(
      'class',
      'button is-primary is-rounded is-large m-1 p-5 is-align-self-flex-end'
    );
    $spanDel.append($iconDelete);
    $cardBtnDel.append($spanDel);
    $cardFooterItem3.append($cardBtnDel);

    // update button
    const $iconUpdate = $('<i>').attr('class', 'far fa-edit');
    const $spanUpd = $('<span>').attr('class', 'icon is-medium');
    const $cardBtnUpd = $('<button>').attr(
      'class',
      'button is-primary is-rounded is-large m-1 p-5 is-align-self-flex-end'
    );
    $spanUpd.append($iconUpdate);
    $cardBtnUpd.append($spanUpd);
    $cardFooterItem2.append($cardBtnUpd);

    // attach card content
    $card.append($cardContent);

    // attach buttons
    $card.append($cardFooter);
    $cardFooter.append($cardFooterItem1);
    $cardFooter.append($cardFooterItem2);
    $cardFooter.append($cardFooterItem3);

    // attach card to section
    $notesSection.append($card);
  }

  // hydrate page with note data
  $('.logout').on('click', function () {
    window.location.replace('/logout');
  });
});
