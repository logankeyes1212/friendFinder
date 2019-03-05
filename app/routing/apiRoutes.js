var userData = require("../data/friends");
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(userData);
    });
    var comparisonUserTotalScore = 0;
    var friendScores = [];

    app.post("/api/friends", function (req, res) {
        var currentUserScores = req.body.scores;

        // console.log("Current scores: " + currentUserScores);
        for (var i = 0; i < userData.length; i++) {
            var comparisonUserScores = userData[i].scores;

            comparisonUserTotalScore = calculateUserCompatibilityScore(currentUserScores, comparisonUserScores);

            friendScores.push(comparisonUserTotalScore);
        }
        // console.log("friend scores: " + friendScores);
        var index = 0;
        var value = friendScores[0];

        for (var i = 0; i < friendScores.length; i++) {
            //   console.log("Value: " + friendScores[i]);
            if (friendScores[i] < value) {
                value = friendScores[i];
                index = i;
            }
        }

        //  console.log("Best friend is " + userData[index].name);
        res.send(userData[index]);
        userData.push(req.body);
    });
};
var totalDifference = 0;

function calculateUserCompatibilityScore(currentUserScores, comparisonUserScores) {

    totalDifference = 0;

    for (var i = 0; i < currentUserScores.length; i++) {

        totalDifference += Math.abs(currentUserScores[i] - comparisonUserScores[i]);
    }

    //   console.log("total difference " + totalDifference);
    return totalDifference;
};

