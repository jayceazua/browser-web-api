let sampleAPI = 'https://itunes.apple.com/us/rss/topmovies/limit=28/json';
const title = document.getElementById('title');
fetch(sampleAPI)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson)
    title.innerHTML = myJson.feed.title.label
  });
