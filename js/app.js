let sampleAPI = 'https://itunes.apple.com/us/rss/topmovies/limit=28/json';

fetch(sampleAPI)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    document.getElementById('demo').innerHTML = JSON.stringify(myJson);
  });
