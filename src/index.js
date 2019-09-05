import $ from 'jquery'

const fetchTopWord = fetch(`https://wordwatch-api.herokuapp.com/api/v1/top_word`);

fetchTopWord.then(response => {
  return response.json();
}).then(topWord => {
  var word = Object.keys(topWord.word)[0];
  var count = Object.values(topWord.word)[0];
  document.getElementById('outputWord').innerHTML = word;
  document.getElementById('outputCount').innerHTML = count;
});
