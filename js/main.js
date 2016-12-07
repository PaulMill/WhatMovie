(function() {
  'use strict';
  let searchResult = [];

  const createCard = () => {
    $('#cards').empty();
    const $container = $('<div>').attr({id:'cards'}).addClass('container row');
    $('main').append($container);

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
      const $descr = $('<div>').addClass('bold-text').text(`Movie description:`);
      const $quote = $('<blockquote>').text(card.overview);
      const $release = $('<div>').addClass('bold-text').text(`Release date: ${card.release_date}`);
      const $fullDescr = $('<div>').attr({id:'more_info'});
      const $moreInfo = $('<a>').addClass('waves-effect waves-green btn-flat').attr({http: `${$modal}`}).text('More info...');

      $fullDescr.append($moreInfo);
      $cardContent.append($descr, $quote, $release, $fullDescr);

      var $modal = $('<div>').addClass('modal modal-content').attr({id:'modal1'});
      const $par = $('<p>').text(card.overview);
      $modal.append($descr, $par);

      const $cardAction = $('<div>').addClass('card-action');
      const $button1 = $('<a>').attr({
        href:`http://youtube.com`,
        id:`YTLink`
      }).text('trailer');
      const $button2 = $('<a>').attr({
        href:`http://google.com/`,
        id:`GoogLink`
      }).text('watch');

      $cardAction.append($button1, $button2);
      $cardStacked.append($cardContent, $cardAction);
      $cardPos.append($cardImage, $cardStacked);
      $cardCol.append($headerCard, $cardPos);
      $container.append($cardCol);
    };
  };

//buttons on the nav-bar
  $('.new-release').on('click', (event) => {
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
        console.log(searchResult);
    });
  };
})();
