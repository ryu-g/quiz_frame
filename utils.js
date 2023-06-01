//全列挙用関数 ex clog( listAllProperties(obj) )
exports.listAllProperties = (obj) => {
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
exports.generateNumberList = (item) =>{
  const type = typeof(item)
  if( type === "object" ){
    return [...Array(Object.keys(item).length).keys()] 
  }else if( item.isArray() ){
    return [...Array(item.length).keys()] 
  }
}

//番号ランダマイズ用
exports.shuffle = (list) =>{
  for(i = list.length -1;i>0;i--){
    j = Math.floor(Math.random()*(i+1));
    [list[i], list[j]] = [list[j], list[i]]
  }
  return list 
}

//すべてのボタンをdisableにする
exports.makeDisabelAllChoiceButton = ( button_list ) => {
  button_list.forEach( button => {
    console.log(`button_list is ${ button.disabled }`)
    button.setAttribute("disabled", true)
  })
}

//すべてのボタンをableにする
exports.makeAbelAllChoiceButton = ( button_list ) => {
  button_list.forEach( button => {
    console.log(`button_list is ${ button }`)
    if(button.disabled === true)
      button.removeAttribute("disabled")
  })
}

