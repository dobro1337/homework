// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity ;
  max = -Infinity ;
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
  let sum = 0;

  for(let i =0;i<arr.length;i++){
    sum+=arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -1000;

  for(let i = 0; i<arrOfArr.length; i++) {
    let temp = func(arrOfArr[i]);
    max = (max < temp) ? temp : max;
  }
  console.log(max);
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max;
  min = Infinity ;
  max = -Infinity ;
  
  for(let i = 0;i<arr.length; i++){
    max = (max < arr[i]) ? arr[i] : max;
    min = (min > arr[i]) ? arr[i] : min;
  }

  return Math.abs(min-max);
}
