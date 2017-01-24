(function() {
  'use strict';

// function for for dropdown menu
  $('.dropdown-button').dropdown();

  let searchResult = [];
  let dataResult = [];

  const $moreMovieButton = $('<a>')
    .addClass('waves-effect waves-light btn-large grey lighten-1')
    .attr({
      href: '',
      id: 'moreMovie'
    }).text('More movies');
  const $iconButton = $('<i>')
    .addClass('material-icons right')
    .text('video_library');

  const createCard = (result) => {
    const $container = $('<div>').addClass('movie-cards container row');

    $('main').append($container);

// loop for creating DOM element of movie card
    for (const card of result) {
      const $cardCol = $('<section>').addClass('col s12 m6 carddd');
      const $headerCard = $('<h6>')
      .addClass('header pink-text center-align')
      .text(card.title);
      const $cardPos = $('<div>')
      .addClass('card horizontal card-panel hoverable');

      const $cardImage = $('<div>').addClass('card-image');
      const $image = $('<img>').attr({
        src: `https://image.tmdb.org/t/p/w500${card.poster_path}`,
        alt: `Poster ${card.poster_path}`
      });

      $cardImage.append($image);

      const $cardStacked = $('<div>').addClass('card-stacked');
      const $cardContent = $('<div>').addClass('card-content');
      const $descr = $('<div>')
      .addClass('bold-text')
      .text('Movie description:');

      $cardContent.append($descr);
      const $quote = $('<blockquote>').text(card.overview);
      const $release = $('<div>')
      .addClass('bold-text')
      .text(`Release date: ${card.release_date}`);
      const $moreInfo = $('<a>');

      $moreInfo.addClass('modal-trigger waves-effect waves-green btn-flat');
      $moreInfo.attr({
        href: `#${card.id}`,
        id: 'buttonMore',
        val: `${card.id}`
      });
      $moreInfo.text('More info...');
      $cardContent.append($quote, $release);
      $moreInfo.appendTo($cardContent);

      const $cardAction = $('<div>').addClass('card-action');
      const $button1 = $('<a>').attr({
        href: `https://www.youtube.com/results?search_query=movie+trailer+${card.title}`,
        target: '_blank',
        val: `${card.title}` }).text('trailer');
      const $button2 = $('<a>').attr({
        href: `https://www.google.com/#q=watch+movie+${card.title}`,
        target: '_blank',
        val: `${card.title}` }).text('watch');

      $cardAction.append($button1, $button2);
      $cardStacked.append($cardContent, $cardAction);
      $cardPos.append($cardImage, $cardStacked);
      $cardCol.append($headerCard, $cardPos);
      $container.append($cardCol);

// creating modal for pop window
      const $modal = $('<div>').attr({ id: `${card.id}` }).addClass('modal');
      const $modalContent = $('<div>').addClass('modal-content');
      const $modalHeader = $('<h4>').text(card.title);
      const $modalP1 = $('<p>')
      .addClass('bold-text')
      .text('Movie description:');
      const $modalP2 = $('<p>').text(card.overview);
      const $modalYearRelease = $('<div>')
      .addClass('bold-text')
      .text(`Release date: ${card.release_date}`);

      $modalContent.append($modalHeader, $modalP1, $modalP2, $modalYearRelease);
      $modal.append($modalContent);
      $('body').append($modal);
    }

// create DOM for "More Movie" button
    $moreMovieButton.remove();
    $moreMovieButton.append($iconButton);
    $('main').append($moreMovieButton);

    // button "More Movie" eventListener
    $('#moreMovie').on('click', (event) => {
      event.preventDefault();

      for (let i = 0; i < dataResult.length; i++) {
        dataResult.splice(i, 1);
      }
      console.log('before it statement' + dataResult);
      if (dataResult.length) {
        createCard(dataResult);
      }
      else {
        $moreMovieButton.prop('disabled', true)
        .addClass('btn-large disabled')
        .text('No more movies');
        Materialize.toast('Try to decide other options', 5000, 'rounded');
      }
    });

// call function for showing modals
    $('.modal').modal();
  };

// buttons on the nav-bar
  $('.new-release-nav').on('click', (event) => {
    event.preventDefault();
    $('.movie-cards').remove();
    $('#genreCollection').remove();
    $('#buttonsYear').remove();
    $('#actorCollection').remove();
    getDataAPI(urlNowRelease);
  });
  $('.high-voting').on('click', (event) => {
    event.preventDefault();
    $('.movie-cards').remove();
    $('#genreCollection').remove();
    $('#buttonsYear').remove();
    $('#actorCollection').remove();
    getDataAPI(highVotingUrlApi);
  });
  $('.high-rating').on('click', (event) => {
    event.preventDefault();
    $('.movie-cards').remove();
    $('#genreCollection').remove();
    $('#buttonsYear').remove();
    $('#actorCollection').remove();
    getDataAPI(highRatingUrlApi);
  });
  $('.high-grossing').on('click', (event) => {
    event.preventDefault();
    $('.movie-cards').remove();
    $('#genreCollection').remove();
    $('#buttonsYear').remove();
    $('#actorCollection').remove();
    getDataAPI(highRevenueUrlApi);
  });

// function for getting data from API for movie cards
  window.getDataAPI = function(apiUrl) {
    const $xhr = $.ajax({
      method: 'GET',
      url: apiUrl,
      dataType: 'json'
    });

    $xhr.done((data) => {
      if ($xhr.status !== 200) {
        return;
      }
      dataResult = data.results;
      searchResult = [];
      for (let i = 0; i < 8; i++) {
        searchResult.push(dataResult[i]);
        dataResult.splice(i, 1);
      }
      createCard(searchResult);
    });
  };
})();
