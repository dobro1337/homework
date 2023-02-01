"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b,2) - 4*a*c;

  if (discriminant === 0 ){
    arr[0] = -b/(2*a);
  }
  else if(discriminant > 0){
    arr[0] = (-b + Math.sqrt(discriminant))/(2*a)
    arr[1] = (-b - Math.sqrt(discriminant))/(2*a)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent) || percent < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution) || contribution < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount) || amount < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let totalAmount;
  let creditBody = amount - contribution;//тело кредита.
  let today = new Date(); //определяем сегодняшнее число
  let currentYear = today.getFullYear(); //текущий год
  let currentMonth = today.getMonth();//текущий месяц
  
  let countMonth = 0;//кол-во месяцев
  for(let year = currentYear; year<= date.getFullYear();year++){
    if(year === date.getFullYear()) {
      countMonth +=date.getMonth();
    }
    else if(year == currentYear){
      countMonth += 12 - currentMonth;
    }
    else {
      countMonth+=12;
    }
  }
  let p = parseFloat(percent)/100 * 1/12 
  let payment = creditBody * (p + (p / (Math.pow(1 + p,countMonth) - 1)));
  totalAmount = (payment * countMonth).toFixed(2);
  return parseFloat(totalAmount);
}
