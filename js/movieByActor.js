(function() {
  'use strict';

// function to create DOM elements for button on landing page "Popular by actor"
  const popByActor = () => {

// creating and adding div with container of buttons "actors"
    const $container = $('<div>').attr({ id: 'actorCollection' }).addClass('container row');
    $('main').append($container);

// iterraiting through actors file to creating collection in DOM
    for (const card of actors) {
      const $collection = $('<ul>').addClass('actor-item collection col s6 l3 offset-l1');

      $container.append($collection);
      const $colItem = $('<li>').addClass('collection-item avatar');

      $collection.append($colItem);
      const $imgActor = $('<img>').attr({
        src: card.urlImg,
        alt: `Picture of ${card.name}`
      }).addClass('circle');
      const $titleActor = $('<span>').addClass('title bold-text').text(card.name);
      const $p2 = $('<p>').text('details: ');
      const $a = $('<a>').addClass(`secondary-content button${card.id}`).attr({href: "#cards"})
      const $icon = $('<i>').addClass('material-icons pink-text').text('thumb_up');

// appending to DOM
      $a.append($icon);
      $colItem.append($imgActor, $titleActor, $p2, $a);

// creating click event for each actor
      $(`.button${card.id}`).on('click', (event) => {
        $('.movie-cards').remove();
        getDataAPI(card.urlApi);
      });
    }
  }

  // adding eventListener for button "Movie by actor"
  $('#movieActor').on('click', (event) => {
    event.preventDefault();
    $('.movie-cards').remove();
    $('#genreCollection').remove();
    $('#buttonsYear').remove();
    $('#actorCollection').remove();
    popByActor(event);
  });
})();
