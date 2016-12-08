(function() {
  'use strict';

  let searchResult = [];

  const createCard = () => {
    // $('#cards').empty();

    const $container = $('<div>').attr({id: 'cards'}).addClass('container row');
    $('main').append($container);


//loop for creating DOM element of movie card
    for (const card of searchResult) {

      const $cardCol = $('<section>').addClass('col s12 m6');
      const $headerCard = $('<h5>').addClass('header pink-text center-align').text(card.title);
      const $cardPos = $('<div>').addClass('card horizontal card-panel hoverable');

      const $cardImage = $('<div>').addClass('card-image');
      const $image = $('<img>').attr({
        src:`https://image.tmdb.org/t/p/w500${card.poster_path}`,
        alt:`Poster ${card.poster_path}`
      });

      $cardImage.append($image);

      const $cardStacked = $('<div>').addClass('card-stacked');
      const $cardContent = $('<div>').addClass('card-content');
      const $descr = $('<div>').addClass('bold-text').text('Movie description:');
      $cardContent.append($descr);
      const $par = $('<p>').text(card.overview);
      const $quote = $('<blockquote>').text(card.overview);
      const $release = $('<div>').addClass('bold-text').text(`Release date: ${card.release_date}`);
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
        target: "_blank",
        val: `${card.title}`
        }).text('trailer');
      const $button2 = $('<a>').attr({
        href: `https://www.google.com/#q=watch+movie+${card.title}`,
        target: "_blank",
        val: `${card.title}`
        }).text('watch');

      $cardAction.append($button1, $button2);
      $cardStacked.append($cardContent, $cardAction);
      $cardPos.append($cardImage, $cardStacked);
      $cardCol.append($headerCard, $cardPos);
      $container.append($cardCol);

//creating modal for pop window
      const $modal = $('<div>').attr({id: `${card.id}`} ).addClass('modal');
      const $modalContent = $('<div>').addClass('modal-content');
      const $modalHeader = $('<h4>').text(card.title);
      const $modalP1 = $('<p>').addClass('bold-text').text('Movie description:');
      const $modalP2 = $('<p>').text(card.overview);
      const $modalYearRelease = $('<div>').addClass('bold-text').text(`Release date: ${card.release_date}`);
      $modalContent.append($modalHeader, $modalP1, $modalP2, $modalYearRelease);
      $modal.append($modalContent);
      $('body').append($modal);

      // $('.YTLink').on('click', (event) => {
      //
      // });
    };
// call function for showing modals
    $('.modal').modal();
  };
//buttons on the nav-bar
  $('.new-release-nav').on('click', (event) => {
    getDataAPI(url_now_release);
  });
  $('.high-voting').on('click', (event) => {
    getDataAPI(high_voting_url_api);
  });
  $('.high-rating').on('click', (event) => {
    getDataAPI(high_rating_url_api);
  });
  $('.high-grossing').on('click', (event) => {
    getDataAPI(high_revenue_url_api);
  });


//function for getting data from API for movie cards
  window.getDataAPI = function (api_url) {
    const $xhr = $.ajax({
      method: 'GET',
      url: api_url,
      dataType: 'json'
    });

    $xhr.done((data) => {
      if ($xhr.status !== 200) {
        return;
      }
      console.log(data);
      for (let i = 0; i < 8; i++) {
        searchResult.push(data.results[i]);
      }
      createCard(searchResult);
    });
  };
})();
