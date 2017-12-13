function high(x){
let wordsArr = x.split(' ');
let wordsScores = wordsArr.map(string => {
  let curr = 0;
  for (let i = 0; i < string.length; i++) {
    curr += (string.charCodeAt(i) - 96)
  }
  return curr;
});
  let biggestWord = '';
  let biggestNum = 0;
  for(var i=0; i< wordsScores.length; i++){
      if(wordsScores[i] > biggestNum){
          biggestNum = wordsScores[i];
          biggestWord = wordsArr[i];
       }
  }
return biggestWord;
}
