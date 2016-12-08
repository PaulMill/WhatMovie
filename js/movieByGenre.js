  const getGenreData = () => {
    const $xhr = $.ajax({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=a7a6367c472249d9e3def2c5b9bb046e',
      dataType: 'json'
    });

    $xhr.done((data) => {
      if ($xhr.status !== 200) {
        return;
      }
      popByGenre(data.genres);
    })
  };

//function to create DOM elements for button on landing page "Popular by genre"
  const popByGenre = (genres) => {

// creating and adding div with container of buttons "actors"
    const $container = $('<div>').attr({id:'genreCollection'}).addClass('container row');
    $('main').append($container);

// iterraiting through actors file to creating collection in DOM
    for (const genre of genres) {
      const $collection = $('<ul>').addClass('collection col s6 l3 offset-l1');

      $container.append($collection);
      const $colItem = $('<li>').addClass('collection-item avatar');

      $collection.append($colItem);
      const $icon = $('<i>').addClass('material-icons circle red').text('play_arrow');
      const $a = $('<a>').addClass(`button${genre.id}`).attr({href: "#cards"})
      $a.append($icon);

      const $titleGenre = $('<span>').addClass('title bold-text').text(genre.name);

// appending to DOM
      $colItem.append($a, $titleGenre);

// creating click event for each actor
      $(`.button${genre.id}`).on('click', (event) =>{
        $('.movie-cards').remove();
        const url_api = `https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_genres=${genre.id}&sort_by=popularity.desc`
        getDataAPI(url_api);
      });
    }
  }
  // adding eventListener for button "Movie by actor"
  $('#movieGenre').on('click', (event) => {
    event.preventDefault();
    $('.movie-cards').remove();
    $('#genreCollection').remove();
    $('#buttonsYear').remove();
    $('#actorCollection').remove();
    getGenreData(event);
  });
