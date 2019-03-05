var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/survey", function (req, res) {
        res.json(friends)

        //    console.log(friends)
    });

    app.post("/api/survey", function (req, res) {
        friends.push(req.body);
        res.json(true);
        // let friendsTotal = friends.scores;
        // console.log(friendsTotal)
        let scoreTotal = req.body.scores;
        Number.parseInt(scoreTotal);
        var totalIn = 0;
        for (let i in scoreTotal) {
            scoreTotal[i] = parseInt(scoreTotal[i], 10)
            totalIn += scoreTotal[i]
            // console.log(totalIn)
            
        }
            var sum = 0;

            for(let i = 0; i < friends.length; i++){
              let eachScore = friends[i].scores;
              let x = eachScore.reduce((total,current)=>{
                total += +current;
                return total;
              },0);
            //   console.log(b);
            //   console.log(totalIn)
            
              sum += x;
            }
            function difference(a, b){
                return Math.abs(a - b);
            }
            console.log(difference(5, totalIn))
            
            // console.log(sum);
        // } 
    });
  
}
// ==================== this works better
app.post("/api/survey", function (req, res) {
    friends.push(req.body);
    res.json(true);
    // let friendsTotal = friends.scores;
    // console.log(friendsTotal)
    let scoreTotal = req.body.scores;
    Number.parseInt(scoreTotal);
    var totalIn = 0;
    for (let i in scoreTotal) {
        scoreTotal[i] = parseInt(scoreTotal[i], 10)
        totalIn += scoreTotal[i]
    }
    var sum = 0;

    for (let i = 0; i < friends.length; i++) {
        let eachScore = friends[i].scores;
        let b = eachScore.reduce((total, current) => {
            total += +current;
            return total;
        }, 0);

        // console.log(difference(b, totalIn))
        if (difference(b, totalIn) === 0){
            console.log(totalIn)
        }

    }
});

function difference(a, b) {
return Math.abs(a - b);
}