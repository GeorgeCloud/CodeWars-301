
function isNice(arr){
  if (arr.length === 0){return false}
  for (i in arr){
    if (arr.includes(arr[i]+1)===false && arr.includes(arr[i]-1)===false){
      return false
    }
  }
  return true
}

###################################################################################

let isNice=a=>{
  if (!a.length) return false
  return a.every(v=>{
    return a.includes(v+1) || a.includes(v-1)? true : false
  })
}
