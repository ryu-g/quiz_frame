## quiz

## data format
```
[
  {
    "id": "000", //quiz id
    "genre": 0,  //quiz genre
    "quizText": "鮮やかな赤･オレンジ･黄のように、注意を引き、目立つ色のことを????が高い色という",//guiz text
    "quizChoices": [ //answer pattern
      "誘目性",
      "視認性",
      "識別性",
      "警告性"
    ],
    "correctChoice": 3, //collect answer number, not index
    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、ぼたんをクリックしたあとに表示します。" // quiz desctiption and commentary
  },
  ...
  {
    ...
  }
]
```

