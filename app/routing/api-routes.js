var friends = require("../data/friends");
var express = require("express");

module.exports = function(app) {
  // for loop for pringing all json objects
  app.get('/api/friends', function(req, res) {
    res.send("<p>ermahgerd! it weerkks!</p>")
    // iterate to display all users in json format
    for (var i = 0; i < userArray.length; i++) {
      return res.json(userArray[i]);
    }
    res.json(userArray[i]);
  })

  app.post('/api/friends', function(app) {
  // for loop for finding all indexes in score array
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
