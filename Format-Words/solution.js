

function formatWords(words){
  return words ? words.filter(function (v) {
    return v.length;
  }).join(', ').replace(/,(?=[^,]*$)/, ' and') : '';
}
