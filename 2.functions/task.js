// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = 101;
  max = -101;
  sum = 0;
  
  for(let i = 0;i<arr.length; i++){
    max = (max < arr[i]) ? arr[i] : max;
    min = (min > arr[i]) ? arr[i] : min;
    sum+=arr[i];
  }

  avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
