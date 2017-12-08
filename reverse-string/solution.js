Can't use the reverse method


function solution(str){
  let t = '';
  for (let i=str.length-1; i>=0; i--){
    t += str[i]
  }
  return t
}
