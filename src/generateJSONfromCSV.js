const fs = require("fs")

const data = fs.readFileSync("./dummy_sample1.csv", 'utf8')
const nest_target = null

const csv2json = (csvArray) => {
  let jsonArray = []                  //からのオブジェクトを作成(行列)
  let RowArray = csvArray.split('\n') //行ごとに分割(行,行,行,...)
  let items = RowArray[0].split(',')  //各行内のアイテムを分割(item, item, item...)
  for(let i = 1; i < RowArray.length ; i++){
    let cellArray = RowArray[i].split(',')
    let line = new Object()
    for(let j = 0 ; j < items.length ; j++){
      line[items[j]] = cellArray[j]
    } 
    jsonArray.push(line)
  }
  return jsonArray
}

const json = csv2json(data)
console.log(json)
fs.writeFile("dummy_2.json", JSON.stringify(json, '', '  '), (err)=>{})
