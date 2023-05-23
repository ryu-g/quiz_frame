import { equal } from "assert";
import "./main.sass"
import { readFileSync } from 'fs';

const clog=(a)=>{console.log(`message:${a}`)}
const cdr=(a)=>{console.dir(`message:${a}`)}


//全列挙用関数 ex clog( listAllProperties(obj) )
function listAllProperties(obj) {
  let props = [];
  if (obj === null || obj === undefined) {
    return props
  }
  Object.getOwnPropertyNames(obj).forEach(function (prop) {
    if (typeof obj[prop] === 'object') {
      props = props.concat(listAllProperties(obj[prop]));
    } else {
      props.push(prop);
    }
  })
  return props;
}

//番号生成
const generateNumberList = (item) =>{
  const type = typeof(item)
  if( type === "object" ){
    return [...Array(Object.keys(item).length).keys()] 
  }else if( item.isArray() ){
    return [...Array(item.length).keys()] 
  }
}

//番号ランダマイズ用
const shuffle = (list) =>{
  for(i = list.length -1;i>0;i--){
    j = Math.floor(Math.random()*(i+1));
    [list[i], list[j]] = [list[j], list[i]]
  }
  return list 
}

//選択肢へのクリックイベント追加用
const addJudgeEvent = ( list, collectnum ) => { //void
  const n = Number(collectnum)
  for( let i = 0 ; i < list.length; i++){
    if( i == n ){
      list[i].addEventListener('click', () => {
        console.log("正解!")
        // selected = true
        view_quizDescription.classList = "description_display"
        reflesh_correctTimes()
      })
    }else{
      list[i].addEventListener('click', () => {
        console.log("ざんねん")
        // selected = true
        view_quizDescription.classList = "description_display"
        reflesh_incorrectTimes()
      })
    }
  }
}

const SRC_FILE = readFileSync("./quiz.json", 'utf8')
const RESULT_FILE = "./result.json"
const data = JSON.parse(SRC_FILE)
const questionNumbers = generateNumberList(data)
const shuffledList = shuffle(questionNumbers)
const event_answer = new Event('answer')

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
// console.log( shuffledList )

a = JSON.stringify(data,null,2)
// clog( data )

const quizID = 0
const quizData_id = data[quizID].id
view_quizID.innerText = `id ${quizData_id}`

const quizData_genre = data[quizID].genre
view_genre.innerText = `Genre quizData_genre`

const quizData_quizText = data[quizID].quizText
view_quizText.innerText = quizData_quizText

const quizData_correctChoice = data[quizID].correctChoice
const quizData_choices = data[quizID].quizChoices
choices_0.innerText = quizData_choices[0]
choices_1.innerText = quizData_choices[1]
choices_2.innerText = quizData_choices[2]
choices_3.innerText = quizData_choices[3]
const quizData_quizDescription = data[quizID].quizDescription
view_quizDescription.innerText = quizData_quizDescription

let quizData_correctTimes = 0
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
  addJudgeEvent( resolve, quizData_correctTimes )
})

// console.log( quiz_id )
// console.log( quiz_genre )
// console.log( quiz_quizText )
// console.log( quizData_quizChoices )

// console.log( quiz_correctChoice )
// console.log( quiz_quizDescription )
// console.log( quiz_correctTimes )
// console.log( quiz_incorrectTimes )

const main = () =>{
  
}