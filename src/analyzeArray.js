export function analyzeArray(array) {
  const average = averageArray(array);
  const min = minArray(array);
  const max = maxArray(array);
  const length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
}

function sumArray(array) {
  return array.reduce((prev, curr) => prev + curr, 0);
}

function averageArray(array) {
  const len = array.length;
  const sum = sumArray(array);
  console.log(sum, len);

  return sum / len;
}

function minArray(array) {
  return array.reduce((prev, curr) => (prev > curr ? curr : prev));
}

function maxArray(array) {
  return array.reduce((prev, curr) => (prev < curr ? curr : prev));
}
