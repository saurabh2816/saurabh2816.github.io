// var request = require('request');
//
// request({url: 'http://www.omdbapi.com/?t=good&y=&plot=short&r=json', json: true}, function(err, res, json) {
//   if (json.Response=="False") {
//     console.log(json.Error);  }
//     else
//   console.log(json.Title + '\n' + json.Year + '\n' + json.Poster);
// });



function tweeting() {
  var twit = require('twit');

  var T = new twit({
    consumer_key:         'ENugEsEkmdiKjr45X1JGeKAwm',
    consumer_secret:      '5j9RkhsS0OCkMqA30UVaWvJuWXqFYzOiNU5GHZffY1SfMgEToP',
    access_token:         '93342859-8vtGd2paJ0cQXfZE8agZ9tFiHBXgNSA5xgllCg718',
    access_token_secret:  'LJlBzh7hwYF6EPp7L099UP6Dc6YFWBnqMSFN7AExwWiqD',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  })

  T.post('statuses/update', { status: 'it works too' }, function(err, data, response) {
    console.log(data);
  })

}
