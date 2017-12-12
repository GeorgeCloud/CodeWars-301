function cubeOdd(arr) {
  sum = 0;
  for(i in arr){
    if(isNaN(arr[i])){return undefined;}
    if(arr[i]%2==1){sum += arr[i] ** 3}
  }
  return sum;
}
