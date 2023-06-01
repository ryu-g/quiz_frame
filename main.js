import "./main.sass"
import { readFileSync } from 'fs';
const utils = require("./utils.js")

//選択肢へのクリックイベント追加用
const addJudgeEvent = ( list, collectnum ) => { 
  const n = Number(collectnum)
  for( let i = 0 ; i < list.length; i++){
    console.log(`i: ${i}`)
    console.log(`n: ${n}`)
    if( i == n ){
      list[i].addEventListener('click', () => {
        console.log("正解!")
        view_quizDescription.classList = "description_display"
        reflesh_correctTimes()
        utils.makeDisabelAllChoiceButton( button_list )
      })
    }else{
      list[i].addEventListener('click', () => {
        console.log("ざんねん")
        view_quizDescription.classList = "description_display"
        reflesh_incorrectTimes()
        utils.makeDisabelAllChoiceButton( button_list )
      })
    }
    console.log(button_list)
  }
}

const SRC_FILE = readFileSync("./quiz.json", 'utf8')
const data = JSON.parse(SRC_FILE)
const questionNumbers = utils.generateNumberList(data)
const shuffledList = utils.shuffle(questionNumbers)
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

let choiceButtons = [choices_0, choices_1, choices_2, choices_3]
let button_list = [choices_0, choices_1, choices_2, choices_3]
let quizID = 0
let quizData_id = data[quizID].id
let quizData_genre = data[quizID].lesson
let quizData_correctChoice = data[quizID].correctChoice-1
let quizData_choices = data[quizID].quizChoices
let quizData_quizDescription = data[quizID].quizDescription
let quizData_quizText = data[quizID].quizText
let quizData_correctTimes = 0

const reflesh_quiz = () =>{
  quizID = 0
  quizData_id = data[quizID].id
  quizData_genre = data[quizID].genre
  quizData_correctChoice = data[quizID].correctChoice-1
  quizData_choices = data[quizID].quizChoices
  quizData_quizDescription = data[quizID].quizDescription
  quizData_quizText = data[quizID].quizText
  view_quizID.innerText = `id ${quizData_id}`
  view_genre.innerText = `Genre quizData_genre`
  view_quizText.innerText = quizData_quizText
  choices_0.innerText = quizData_choices[0]
  choices_1.innerText = quizData_choices[1]
  choices_2.innerText = quizData_choices[2]
  choices_3.innerText = quizData_choices[3]
  view_quizDescription.innerText = quizData_quizDescription
  choiceButtons = [choices_0, choices_1, choices_2, choices_3]
  utils.makeAbelAllChoiceButton(choiceButtons)
  view_quizDescription.classList = "description_hidden"
}

const reflesh_correctTimes = () => {
  view_correnctTimes.innerText = `正解数 : ${++quizData_correctTimes}`
  console.log("正解数を増やします")
}

let quizData_incorrectTimes = 0
const reflesh_incorrectTimes = () => {
  view_incorrenctTimes.innerText = `不正解数 : ${++quizData_incorrectTimes}`
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
  console.log(`quiz id is ${quizID}`)
  console.log("cliced reflesh button")
})

reflesh_quiz()