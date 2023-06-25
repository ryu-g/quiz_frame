var fs = require('fs');
// const pre = document.getElementById(`viewer`)
let createQuiz = (num) => {
  const ID = num.toString().padStart( 3, '0' )
  const quiz = {
    id : ID,
    genre : "Genre_name",
    quizText : "aaaaaa",
    quizChoices : ["a","b","c","d:hogehoge"],
    correctChoice : 3,
    quizDescription : "description of quize and answer",
    correctTimes : 0,
    incorrectTimes : 0,
  }
  return quiz
}

const generateQuizes = ( numberOfNewItem ) => {
  const quizDatas = []
  for( let i = 0; i <= numberOfNewItem ; i++ )
    quizDatas.push(createQuiz(i))
  return quizDatas
}

const quizItems = generateQuizes(20)

const jsondata = JSON.stringify( quizItems, null , 2 )
console.log( jsondata )

fs.writeFile('quiz.json', jsondata, (err)=>{
  if(err) console.log('error', err)
})
// pre.innerText = jsondata