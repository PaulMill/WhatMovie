(function() {
  'use strict';
  //for using side-bar
  // $('.button-collapse').sideNav({
  //      menuWidth: 200, // Default is 240
  //      edge: 'right', // Choose the horizontal origin
  //    }
  //  );

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

  const popByYear = () => {
    const years = ["Just Released", [2016, 2015], [2014, 2010], [2009, 2000], [1999, 1990], [1989, 1970]];
// creating and adding div with container of buttons "years"
    const $container = $('<div>').attr({id:'buttons'}).addClass('container row');
    $('main').append($container);

// iterraiting through years to adding HTML and creating cards
    for (const card of years) {
      const $cardCol = $('<div>').addClass('col s6 l3 offset-l1');
      const $cardContent = $('<div>').addClass('card-panel grey lighten-1');
      const $aContent = $('<a>').addClass('white-text a-big').attr({href: "#cards"});

// checking if array of years contains strings and adding to .text
      if (card === "Just Released") {
        $aContent.addClass('new-release').text(card);
      } else
      {
        $aContent.addClass(`button${card[1]}`).text(`${card[1]} - ${card[0]}`);
      }

// appending to DOM
      $cardContent.append($aContent);
      $cardCol.append($cardContent);
      $container.append($cardCol);
      $('.new-release').on('click', (event) => {
        getDataAPI(url_now_release);
      });
      $(`.button${card[1]}`).on('click', (event) =>{
        getDataAPI(urlApiMovie(card[1], card[0]));
      });
    }

// call buttons Movie by Year function
    // $('.new-release').on('click', (event) => {
    //   getDataAPI(url_now_release);
    // });
    // $('.button2015').on('click', (event) => {
    //   getDataAPI(url_release2015_2016);
    // });
    // $('.button2010').on('click', (event) => {
    //   getDataAPI(url_release2010_2014);
    // });
    // $('.button2000').on('click', (event) => {
    //   getDataAPI(url_release2000_2009);
    // });
    // $('.button1990').on('click', (event) => {
    //   getDataAPI(url_release1990_1999);
    // });
    // $('.button1970').on('click', (event) => {
    //   getDataAPI(url_release1970_1989);
    // });
  };
//button Popular by year
  $('#movieYear').on('click', (event) => {
    event.preventDefault();
    popByYear(event);
  });

  const popByActor = () => {

// creating and adding div with container of buttons "actors"
    const $container = $('<div>').attr({id:'actorCollection'}).addClass('container row');
    $('main').append($container);

// iterraiting through actor file to adding HTML and creating collection
    for (const card of actors) {
      const $collection = $('<ul>').addClass('collection col s6 l3 offset-l1');

      $container.append($collection);
      const $colItem = $('<li>').addClass('collection-item avatar');

      $collection.append($colItem);
      const $imgActor = $('<img>').attr({
        src: card.url_img,
        alt: `Picture of ${card.name}`
      }).addClass('circle');
      const $titleActor = $('<span>').addClass('title bold-text').text(card.name);
      const $p1 = $('<p>').text('popularity: ');
      const $p2 = $('<p>').text('details: ');
      const $a = $('<a>').addClass(`secondary-content button${card.id}`).attr({href: "#cards"})
      const $icon = $('<i>').addClass('material-icons pink-text').text('thumb_up');

// appending to DOM
      $a.append($icon);
      $colItem.append($imgActor, $titleActor, $p1, $p2, $a);

// creating click event for each actor
      $(`.button${card.id}`).on('click', (event) =>{
        getDataAPI(card.url_api);
      });
    }

  }
  // adding eventListener for button "Movie by actor"
  $('#movieActor').on('click', (event) => {
    event.preventDefault();
    popByActor(event);
  });


//button on the nav-bar
  $('.new-release').on('click', (event) => {
    getDataAPI(url_now_release);
  });

  function getDataAPI(api_url) {
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
        // $('#moreMovie').on('click', (event) => {
        //   let moreMov = [];
        //   moreMov = searchResult.splice(0, 8);
        //   createCard(searchResult);
        //   console.log(moreMov);
        // });
      console.log(searchResult);
    });
  };
})();
