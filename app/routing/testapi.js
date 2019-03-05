// var friends = require("../data/friends");

// module.exports = function (app) {

//     app.get("/api/survey", function (req, res) {
//         res.json(friends)

//         //    console.log(friends)
//     });

//     app.post("/api/survey", function (req, res) {
//         friends.push(req.body);
//         res.json(true);
//         // let friendsTotal = friends.scores;
//         // console.log(friendsTotal)
//         let scoreTotal = req.body.scores;
//         Number.parseInt(scoreTotal);
//         var totalIn = 0;
//         for (let i in scoreTotal) {
//             scoreTotal[i] = parseInt(scoreTotal[i], 10)
//             totalIn += scoreTotal[i]
//             // console.log(totalIn)
            
//         }
//             var sum = 0;

//             for(let i = 0; i < friends.length; i++){
//               let eachScore = friends[i].scores;
//               let x = eachScore.reduce((total,current)=>{
//                 total += +current;
//                 return total;
//               },0);
//             //   console.log(b);
//             //   console.log(totalIn)
            
//               sum += x;
//             }
//             function difference(a, b){
//                 return Math.abs(a - b);
//             }
//             console.log(difference(5, totalIn))
            
//             // console.log(sum);
//         // } 
//     });
  
// }
// // ==================== this works better
// app.post("/api/survey", function (req, res) {
//     friends.push(req.body);
//     res.json(true);
//     // let friendsTotal = friends.scores;
//     // console.log(friendsTotal)
//     let scoreTotal = req.body.scores;
//     Number.parseInt(scoreTotal);
//     var totalIn = 0;
//     for (let i in scoreTotal) {
//         scoreTotal[i] = parseInt(scoreTotal[i], 10)
//         totalIn += scoreTotal[i]
//     }
//     var sum = 0;

//     for (let i = 0; i < friends.length; i++) {
//         let eachScore = friends[i].scores;
//         let b = eachScore.reduce((total, current) => {
//             total += +current;
//             return total;
//         }, 0);

//         // console.log(difference(b, totalIn))
//         if (difference(b, totalIn) === 0){
//             console.log(totalIn)
//         }

//     }
// });

// function difference(a, b) {
// return Math.abs(a - b);
// }

var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/survey", function (req, res) {
        res.json(friends)
        // console.log(friends)


    });
    // console.log(friends[0].scores)
    app.post("/api/survey", function (req, res) {
       
        // console.log(friends.push(req.body))
        // friends.push(req.body);
        
        // console.log(req.body)
   
        // takes in user input and converts scores into a total number
        let scoreTotal = req.body.scores;
        Number.parseInt(scoreTotal);
        var totalIn = 0;
        for (let i in scoreTotal) {
            scoreTotal[i] = parseInt(scoreTotal[i], 10)
            totalIn += scoreTotal[i]
            // console.log(totalIn)
        }
        // console.log(totalIn) 
        // console.log(numbers)
        // takes in friends.js and grabs the score 
        // var sum = 0;
       total = 0;
       current = 0;
       
        for (let i = 0; i < friends.length; i++) {
            let eachScore = friends[i].scores;
            let totalOut = eachScore.reduce((total, current) => {
                // console.log(current)
                total += +current;
                return total;
            }, 0);
        
            // console.log(totalOut)
            // console.log(difference(totalOut, totalIn))
            if (difference(totalIn, totalOut) <= 5){
                // friends = friends[i]
                console.log(friends.push(req.body))
                friends.push(req.body)
                // return friends
                res.json(true);
            }
        //    else{
        //        res.json(false)
        //    }
             
            }
            // console.log(friends)
        // }
       
        // console.log(difference(totalIn,totalOut))
        // console.log(numbers)
        // const counts = numbers;
        // const goal = 5;
        
        // counts
        //  .reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
         
        // console.log(req.body)
        
    });
}
function difference(a,b) {
    return Math.abs(a-b);
}











