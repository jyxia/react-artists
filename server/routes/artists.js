var request = require('request-promise');

function searchRequest(req, res) {
  var options = {
    url: "http://api-3283.iheart.com/api/v1/catalog/searchAll",
    headers: {
      accept: "application/json"
    },
    qs: {
      keywords: req.query.keywords,
      queryTrack: false,
      queryBundle: false,
      queryArtist: true,
      queryStation: false,
      queryFeaturedStation: false,
      queryTalkShow: false,
      queryTalkTheme: false,
      queryKeyword: false,
      countryCode: "US"
    }
  };

  request(options)
    .then(function(data) {
      var results = JSON.parse(data);
      return results.artists.map(function(artist) {
        return {
          name: artist.artistName,
          id: artist.artistId,
          bio: artist.artistBio
        }
      });
    })
    .then(function(artists) {
      res.send(artists.slice(0, 6));
    })
    .catch(function(err) {
      console.log(err);
      res.send(err);
    });
}

module.exports = function (app) {
  app.get('/api/search/', searchRequest);
};
