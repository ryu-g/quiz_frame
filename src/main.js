import "./main.sass"
import { readFileSync } from 'fs';
const utils = require("./utils.js")

//選択肢へのクリックイベント追加用
const addJudgeEvent = ( list ) => { 
  for( let i = 0 ; i < list.length; i++){
    // console.log(`i: ${i}`)
    // console.log(`n: ${quizData_correctChoice}`)
    list[i].addEventListener('click', () => {
      if( i == quizData_correctChoice ){
        // console.log("正解!")
        reflesh_correctTimes()
      }else{
        // console.log(`ざんねん 正解は${quizData_correctChoice}`)
        reflesh_incorrectTimes()
      }
      displayAnswers(button_list, i, quizData_correctChoice )
      view_quizDescription.classList = "description_display"
      utils.makeDisabelAllChoiceButton( button_list )
    })
    // console.log(button_list)
    nextQuizButton.removeAttribute("disabled")
  }
}
const displayAnswers = ( buttons, clicked, qd_correct ) => { //void
  buttons[clicked].classList.add("clicked")
  for(let i = 0; i < buttons.length; i++){
    if(i == qd_correct){
      buttons[i].classList.add("correct")
    }
    if(i != qd_correct){
      buttons[i].classList.add("incorrect")
    }
  }
}


// const SRC_FILE = readFileSync("./quiz.json", 'utf8')
const SRC_FILE = readFileSync("./src/quiz_new.json", 'utf8')

const data = JSON.parse(SRC_FILE)
// const questionNumbers = utils.generateNumberList(data)
// const shuffledList = utils.shuffle(questionNumbers)
// const event_answer = new Event('answer')

const view_quizID = document.getElementById('quizID')
const view_genre = document.getElementById('quizGenre')
const view_quizText = document.getElementById('quizText')
const view_quizChoices = document.getElementById('quizChoices')
const choices_0 = document.getElementById("choice_0")
const choices_1 = document.getElementById("choice_1")
const choices_2 = document.getElementById("choice_2")
const choices_3 = document.getElementById("choice_3")
const view_quizDescription = document.getElementById('quizDescription')
const view_correnctTimes = document.getElementById('correnctTimes')
const view_incorrenctTimes = document.getElementById('incorrenctTimes')
const view_correnctRatio = document.getElementById('correctRatio')

let choiceButtons = [choices_0, choices_1, choices_2, choices_3]
let button_list = [choices_0, choices_1, choices_2, choices_3]
let quizID = 0
let quizData_id = data[quizID].id
let quizData_genre = data[quizID].lesson
let quizData_correctChoice = data[quizID].correctChoice - 1
let quizData_choices = data[quizID].quizChoices
let quizData_quizDescription = data[quizID].quizDescription
let quizData_quizText = data[quizID].quizText
let quizData_correctTimes = 0

const reflesh_correctTimes = () => {
  view_correnctTimes.innerText = `正解数 : ${++quizData_correctTimes}`
  // console.log("正解数を増やします")
  reflesh_correctRatio(quizData_correctTimes, quizData_incorrectTimes)
}

let quizData_incorrectTimes = 0
const reflesh_incorrectTimes = () => {
  view_incorrenctTimes.innerText = `不正解数 : ${++quizData_incorrectTimes}`
  reflesh_correctRatio(quizData_correctTimes, quizData_incorrectTimes)
}
const reflesh_correctRatio = (c, i) =>{
  let ratio =  (c / (c + i)) * 100
  view_correnctRatio.innerText = `正解率 : ${ratio.toFixed(2)}%`
}

const promise = new Promise((resolve, reject) => {
  const list = [ choices_0, choices_1, choices_2, choices_3 ]
  resolve( list )
})
promise.then(( resolve ) => {
  addJudgeEvent( resolve, quizData_correctChoice )
})

// quiz reflesh function next quiz button attachment
const nextQuizButton = document.getElementById("nextQuiz")
nextQuizButton.addEventListener('click', ()=>{
  reflesh_quiz()
  // console.log(`quiz id is ${quizID}`)
  // console.log("cliced reflesh button")
})

const reflesh_quiz = () =>{
  quizID = Math.floor(Math.random()*308)
  // console.log(`quizID is ${quizID}`)
  quizData_id = data[quizID].id
  quizData_genre = data[quizID].lesson
  quizData_correctChoice = Number(data[quizID].correctChoice) - 1
  quizData_choices = data[quizID].quizChoices
  quizData_quizDescription = data[quizID].quizDescription
  quizData_quizText = data[quizID].quizText
  view_quizID.innerText = `id ${quizData_id}`
  view_genre.innerText = `${quizData_genre}`
  view_quizText.innerText = quizData_quizText
  choices_0.innerText = quizData_choices[0] ?? "-"
  choices_1.innerText = quizData_choices[1] ?? "-"
  choices_2.innerText = quizData_choices[2] ?? "-"
  choices_3.innerText = quizData_choices[3] ?? "-"
  choices_0.classList = ""
  choices_1.classList = ""
  choices_2.classList = ""
  choices_3.classList = ""
  view_quizDescription.innerText = quizData_quizDescription
  choiceButtons = [choices_0, choices_1, choices_2, choices_3]
  utils.makeAbelAllChoiceButton(choiceButtons)
  view_quizDescription.classList = "description_hidden"
}

reflesh_quiz()