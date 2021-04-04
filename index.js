var readlineSync=require('readline-sync')

var score=0;
var highScore=3;

var userName=readlineSync.question("What is your name? ")
console.log("welcome "+userName+" Do you know Tushar? ")
console.log("-------------------------------------------------")
function play(question,answer)
{
    var userAnswer=readlineSync.question(question)
    if(userAnswer.toLowerCase()===answer.toLowerCase())
    {
        console.log("WOW you are right")
        score++;
    }
    else
    {
        console.log("SORRY your are wrong")
        console.log("Right answer is "+answer)
    }
    console.log("---------------------------------------------")
}

