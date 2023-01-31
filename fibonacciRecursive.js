function fibs(n) {
  var arr = [0, 1];
  for (var i = 0; i < n; i++) {
    arr[i + 2] = arr[i + 1] + arr[i];
  }
  return arr.slice(0, n);
}
function fibsRec(n) {
  if (n < 2) {
    return n;
  } else {
    return fibsRec(n - 1) + fibsRec(n - 2);
  }
}
