var friends = require("../data/friends");
var express = require("express");

modules.exports = function(app) {
  app.get('/api/friends', function(req, res) {
  // for loop for pringing all json objects
    res.send("<p>ermahgerd!</p>")
    res.json(userArray);
  })

  app.post('app/data/friends', function(app) {

    for (var i = 0; i < friends.length; i++) {
    var  iteratedScore = friends[i].score;

    }

  })
}

// compare the difference between current user's scores against the users
  // iterate over friends length assign the result to iteratedScore
// another for loop to compare the differences between each iteration of theusers array
  //

  // 3 promises : save it then do the logic then display modal with results form locgic
  // post req.body
