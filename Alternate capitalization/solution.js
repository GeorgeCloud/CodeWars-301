function capitalize(s){
  let a = '';
  let b = '';
  s.split('').map((e,i) => {
    if( i % 2 === 0) {
     a+= e.toUpperCase()
     b += e.toLowerCase()
     } else {
       a += e.toLowerCase() 
       b += e.toUpperCase()
    }
  })
  return [a, b];
};

