// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *  The returned value of the countermaker function is assigned to counter1.
 *  The counter 2 code is just an function that creates increment to function counter2
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *    counter 1 uses a closure as it's inner scope references variable (count = 0) in outer scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 *  We prefer the counter1 code in scenarios that we want the inner function to have full access to all variables and functions in the outer function but the outer function does not have access to the variables and functions defined inside the inner function. we would prefer counter2 code when function is not dependent on changes that occur outside of the function.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return (Math.floor(Math.random()*3));

}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function getInningScore(num, cb){
  let home  = 0;
  let away = 0;
  for( let i=0; i<num; i++){
    home = cb()+ home;
    away = cb()+away;
  }
 return {
   home: home,
   away: away,

 }
 
}
console.log(getInningScore(9, inning));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(cb,cb2,numInning) {
  let homeTotal = 0;
  let awayTotal = 0;
  for (let i = 1; i <= numInning; i ++) {
    const scores = cb(numInning, cb2); 
    let suffix = 'th';
    if (i === 1) suffix = 'st';
    if (i === 2) suffix = 'nd';
    if (i === 3) suffix = 'rd';
    console.log(`${i}${suffix} inning: ${scores.away} - ${scores.home}`);
    homeTotal += scores.home;
    awayTotal += scores.away;
  }

  console.log(`Final Score: ${homeTotal} - ${awayTotal}`);

}

scoreboard(getInningScore ,inning, 8);


