function mutateMyStrings(stringOne, stringTwo){
  let one = stringOne.split('');
  let two = stringTwo.split('');
  let newArr = [one.join('')];
  for (i in one) {
    if(one[i] !== two[i]) {
      one[i] = two[i];
      newArr.push(one.join(''));
    }
  }
  return newArr.join('\n')+('\n');
}
