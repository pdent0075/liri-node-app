
var keys = require('./keys.js');
var twitter = require("twitter");
var spotify = require('spotify');
var liriArgument = process.argv[2];
var value = process.argv[3];
var value = process.argv[4];
var request = require('request');
var fs = require('fs');
switch (liriArgument) {
    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":
        spotifyThis(value);
        break;
};


function myTweets() {
    var client = new twitter({
        consumer_key: 'PWmFwJM3aU4lA1ircXdZpU3d5',
        consumer_secret: 'FxE9QoICQdcQefTUitK79FIE4okUE63c9SoecjxXkesSIClzqB',
        access_token_key: '2920212349-8yJIWn78IEDjDIpBB5xbswMchqMyLLSD7oPiJNl',
        access_token_secret: 'aHHrTHfben2cLUTW8EzADTKnZ5l1EKNwh1L7BhBjce1nC',
    });
    var twitterUsername = process.argv[3];
    if (!twitterUsername) {
        twitterUsername = "0075_dent";
    }
    params = { screen_name: twitterUsername };
    client.get("statuses/user_timeline/", params, function(error, data, response) {
        if (!error) {
            for (var i = 0; i < data.length; i++) {
                var twitterResults =
                    "@" + data[i].user.screen_name + ": " +
                    data[i].text + "\r\n" +
                    data[i].created_at + "\r\n" +
                    "------------------------------ " + i + " ------------------------------" + "\r\n";
                console.log(twitterResults);
            }
        } else {
            console.log("Error :" + error);
            return;
        }
    });
}

function spotifyThis(value) {
    var Spotify = require('node-spotify-api');

   var spotify = new Spotify({
        id: '85ab8b87029b4cd8adb32b6239a51a9a',
        secret: '67506c4cbc6e4922997e2ad7ab64d61e',
    });

   spotify.search({ type: 'track', query: value }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

       console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].preview_url);
        console.log(data.tracks.items[0].album.name);
    });

}
function movieLog(){
        var movie = process.argv[4];
        if(!movie){
            movie = "mr nobody";
        }
        params = movie
        request("http://www.omdbapi.com/?apikey = '40e9cece' " + params + "&y=&plot=short&r=json&tomatoes=true", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var movieObject = JSON.parse(body);
                var movieResults =
                "Title: " + movieObject.Title+"\r\n"+
                "Year: " + movieObject.Year+"\r\n"+
                "Imdb Rating: " + movieObject.imdbRating+"\r\n"+
                "Country: " + movieObject.Country+"\r\n"+
                "Language: " + movieObject.Language+"\r\n"+
                "Plot: " + movieObject.Plot+"\r\n"+
                "Actors: " + movieObject.Actors+"\r\n"+
                "Rotten Tomatoes Rating: " + movieObject.tomatoRating+"\r\n"+
                "Rotten Tomatoes URL: " + movieObject.tomatoURL + "\r\n" +
                console.log(movieResults);
                log(movieResults);
            } else {
                console.log("Error :"+ error);
                return;
            }
        });
    };
    function commands() {
        fs.readFile("random.txt", "utf8", function(error, data){
            if (!error) {
                commandsResults = data.split(",");
                spotifyThisSong(commandsResults[0], commandsResultsResults[1]);
            } else {
                console.log("Error occurred" + error);
            }
        });
    };
    function log(logResults) {
      fs.appendFile("log.txt", logResults, (error) => {
        if(error) {
          throw error;
        }
      });
    }