
  const urlApiMovie = (data1, data2) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&primary_release_year=${data1}&primary_release_year=${data2}&sort_by=popularity.desc`;
  };

  const url_now_release = 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&primary_release_date.gte=2016-09-01&sort_by=popularity.desc';

  const high_voting_url_api = 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&sort_by=vote_average.desc&vote_count.gte=10';

  const high_revenue_url_api = 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&sort_by=revenue.desc';

  const high_rating_url_api = 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&certification_country=US&certification=R&sort_by=revenue.desc';

  const actors = [
    {
      name: 'Will Smith',
      id: 2888,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=2888&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/2iYXDlCvLyVO49louRyDDXagZ0G.jpg'
    },
    {
      name: 'Robert De Niro',
      id: 380,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=380&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/8Bgdfv1oN9Mw0YuMHP6fw8KzDkc.jpg'
    },
    {
      name: 'Tom Hanks',
      id: 31,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=31&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/a14CNByTYALAPSGlwlmfHILpEIW.jpg'
    },
    {
      name: 'Brad Pitt',
      id: 287,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=287&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg'
    },
    {
      name: 'Denzel Washington',
      id: 5292,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=5292&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/t9arcZbg1nLt8GZt2SkWm227YoK.jpg'
    },
    {
      name: 'Leonardo DiCaprio',
      id: 6193,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=6193&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg'
    },
    {
      name: 'Nicolas Cage',
      id: 2963,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=2963&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/fW37Gbk5PJZuXvyZwtcr0cMwPKY.jpg'
    },
    {
      name: 'Colin Firth',
      id: 5472,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=5472&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/kbs5HzE2KjzbKiGYQw2aXFpdvaX.jpg'
    },
    {
      name: 'George Clooney',
      id: 1461,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=1461&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/z4SBfpKDThuQY0FsvDbajcooBdA.jpg'
    },
    {
      name: 'Jason Statham',
      id: 976,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=976&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/PhWiWgasncGWD9LdbsGcmxkV4r.jpg'
    },
    {
      name: 'Julia Roberts',
      id: 1204,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=1204&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/yzaIyUEKHSnEYDwltXs8gpF4SVC.jpg'
    },
    {
      name: 'Angelina Jolie',
      id: 11701,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=11701&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/wdrSStdTmiSHhynCV5CtTJTuzY1.jpg'
    },
    {
      name: 'Jennifer Aniston',
      id: 4491,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=4491&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/uH9FwXtRpiboKeqHUk0RuJRAm6I.jpg'
    },
    {
      name: 'Cameron Diaz',
      id: 6941,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=6941&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/ahFkUN9Sm8oF1txUHE5JcJ95Ere.jpg'
    },
    {
      name: 'Kate Hudson',
      id: 11661,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=11661&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/gGMM8T4QAd3lFC3CURMsmlVH37O.jpg'
    },
    {
      name: 'Sandra Bullock',
      id: 18277,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=18277&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/bsAy8f8UZKairXQzRukU5FP4XAQ.jpg'
    },
    {
      name: 'Charlize Therson',
      id: 6885,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=6885&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/fG0mtmBm3OsvKFucvoQyqBnVwya.jpg'
    },
    {
      name: 'Sarah Jessica Parker',
      id: 520,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=520&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/u2fVzLtsqtDVUSXCkVpdDdUoy48.jpg'
    },
    {
      name: 'Natalie Portman',
      id: 524,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=524&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/jJcRWku3e9OHrmRqytn6WcBjhvh.jpg'
    },
    {
      name: 'Kate Winslet',
      id: 204,
      url_api: 'https://api.themoviedb.org/3/discover/movie?api_key=a7a6367c472249d9e3def2c5b9bb046e&with_cast=204&sort_by=popularity.desc',
      url_img: 'https://image.tmdb.org/t/p/w500/w8wjPbS24vPErNeYhAvtbyAUBMd.jpg'
    }
  ];
