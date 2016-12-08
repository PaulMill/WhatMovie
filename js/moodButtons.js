const moodArr = [[35, 14, 10402], [16, 27, 53, 10752], [10402, 12], [10749, 10751], [36, 35, 53], [10751, 10402, 12], [18, 27, 37], [28, 12, 9648]];
const moodB = ['Excited', 'Sad', 'Angry', 'InLove', 'Surprized', 'Happy', 'Unhappy', 'Bored'];

//getting API for mood buttons
    const moodURLAPI = (index) => {
      let url_api = `https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&sort_by=popularity.desc`;
      for (const inner of moodArr[index]) {
        let searchStr = `&with_genres=${inner}`;
        url_api = url_api+searchStr;
      };
      return url_api;
    };

// iterraiting through actors file to creating collection in DOM
  for (const button of moodB) {
    const $buttonCol = $('<div>').addClass('col s6 l2 offset-l1');
    const $a = $('<a>').addClass(`${button} btn waves-effect waves-red grey lighten-1 mood`).attr({href: '#cards'}).text(button);

    $buttonCol.append($a);
    $('.moodButtons').append($buttonCol);

    $(`.${button}`).on('click', (event) =>{
      let index = moodB.indexOf(button);
      getDataAPI(moodURLAPI(index));
    });
  };
