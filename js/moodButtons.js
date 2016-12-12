(function() {
  'use strict';

  const moodArr = [[35, 14, 10402], [16, 27, 53, 10752], [10402, 12], [10749, 10751], [36, 35, 53], [10751, 10402, 12], [18, 27, 37], [28, 12, 9648]];
  const moodB = ['Excited', 'Sad', 'Angry', 'InLove', 'Surprized', 'Happy', 'Unhappy', 'Bored'];

// getting API for mood buttons
  const moodURLAPI = (index) => {
    let urlApi = 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&sort_by=popularity.desc';

// iterraiting through genre ID(moodArr) array to create API url
    for (const inner of moodArr[index]) {
      const searchStr = `&with_genres=${inner}`;
      urlApi = urlApi + searchStr;
    }

    return urlApi;
  };

// iterraiting through array of mood buttons for creating buttons and click event for this buttons.
  for (const button of moodB) {
    const $buttonCol = $('<div>').addClass('col s6 l2 offset-l1');
    const $a = $('<a>').addClass(`${button} btn-large waves-effect waves-red grey lighten-1 mood`).attr({ href: '#cards' }).text(button);

    $buttonCol.append($a);
    $('.moodButtons').append($buttonCol);

// click event for mood buttons on landing page
    $(`.${button}`).on('click', () => {
      $('.movie-cards').remove();
      $('#genreCollection').remove();
      $('#buttonsYear').remove();
      $('#actorCollection').remove();
      const index = moodB.indexOf(button);

      getDataAPI(moodURLAPI(index));
    });
  }
})();
