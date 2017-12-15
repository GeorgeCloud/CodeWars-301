function capitalize(str, indArr) {
  str = str.split('');
  indArr.forEach(i => (i < str.length ? (str[i] = str[i].toUpperCase()) : 0));
  return str.join('');
}





python

def capitalize(s,ind):
    s = list(s)
    for i in ind:
        if i <= len(s):
            s[i] = s[i].upper()
    
    return ''.join(s)
