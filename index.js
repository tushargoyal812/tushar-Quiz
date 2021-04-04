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

var questions=
[
    {
        question: "In which city does Tushar live? ",
        answer: "ujjain"
    },
    {
        question: "what is Tushar's nick name? ",
        answer: "Laalu"
    },
    {
      question: "Which is the favorite sports of tushar? ",
      answer: "cricket"  
    }

]

for(var i=0;i<questions.length;i++)
{
    play(questions[i].question,questions[i].answer)
}



