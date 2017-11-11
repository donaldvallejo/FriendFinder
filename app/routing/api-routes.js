var data = require("../data/friends");
var express = require("express");

module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
    res.json(data.friends);
  })

  app.post('/api/friends', function(app) {
    var totalDiff = [];
    var user1 = req.body;
    var user2 = req.body;
  // for loop for finding all indexes in score array
    for (var i = 0; i < data.friends.length; i++) {
      totalDiff = user1 - user2;
    var iteratedScore = data.friends[i].score;

    }

  })
}

// compare the difference between current user's scores against the users
  // iterate over friends length assign the result to iteratedScore
// another for loop to compare the differences between each iteration of theusers array
  //

  // 3 promises : save it then do the logic then display modal with results form locgic
  // post req.body
