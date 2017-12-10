function filter_list(l) {
  return l.filter(let => typeof(let) == typeof(1))
}
