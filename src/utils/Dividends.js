export function getDividends (number, arrSize) {
  var arr = [0];
  var result = number / arrSize;

  while (arr.length < arrSize) {
    arr.push(Math.round(result * (arr.length + 1)));
  }
  return arr;
}
