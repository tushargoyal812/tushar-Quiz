var readlineSync=require('readline-sync')

var score=0;
var highScore=3;
var userName=readlineSync.question("What's your name: ")

console.log("welcome "+userName+" DO YOU KNOW Tushar")

console.log("-------------------------------------------")

function play(question,answer)
{
  var userAnswer=readlineSync.question(question) 

  if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    console.log("WOW Right")
    score++;
  }
  else
  {
    console.log("SORRY wrong")
  }
  console.log("--------------------------------------")

}

var questions=[
  {question: "where do Tushar live: ",
   answer: "ujjain",
  },
  {
    question: "what is Tushar's nick name: ",
    answer: "laalu",
  },
  {
    question: "what is tushar's favorite sports: ",
    answer: "cricket",
  }
]

for(var i=0;i<questions.length;i++)
{
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}

if(highScore==score)
{
  console.log("wow you know tushar really well")
}