const years = ["Just Released", [2016, 2015], [2014, 2010], [2009, 2000], [1999, 1990], [1989, 1970]];

const popByYear = () => {

// creating and adding div with container of buttons "years"
  const $container = $('<div>').attr({id:'buttons'}).addClass('container row');
  $('main').append($container);

// iterraiting through years to adding HTML and creating cards
  for (const element of years) {
    const $cardCol = $('<div>').addClass('col s6 l3 offset-l1');
    const $cardContent = $('<div>').addClass('card-panel grey lighten-1');
    const $aContent = $('<a>').addClass('white-text a-big').attr({href: "#cards"});

// checking if array of years contains strings and adding to .text
    if (element === "Just Released") {
      $aContent.addClass('new-release').text(element);
    } else
    {
      $aContent.addClass(`button${element[1]}`).text(`${element[1]} - ${element[0]}`);
    };

// appending to DOM
    $cardContent.append($aContent);
    $cardCol.append($cardContent);
    $container.append($cardCol);

// creating eventListener for buttons years
    $('.new-release').on('click', (event) => {
      getDataAPI(url_now_release);
    });
    $(`.button${element[1]}`).on('click', (event) =>{
      getDataAPI(urlApiMovie(element[1], element[0]));
    });
  }
};

//button on landing page "Popular by year"
$('#movieYear').on('click', (event) => {
  event.preventDefault();
  popByYear(event);
});
