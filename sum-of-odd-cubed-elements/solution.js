function cubeOdd(arr) {
  sum = 0;
  for(i in arr){
    if(isNaN(arr[i])){return undefined;}
    if(arr[i]%2==1 || arr[i]%2==-1 ){sum += arr[i] * arr[i] * arr[i]}
  }
  return sum;
}
