/*   Конверторы из двоичной в десятичную систему счисления (и наоборот),
     на данном этапе работает только с целыми числами.                     */

// Из двоичной

const binToDec = (num1) => {
  let arrNum = num1.split("").reverse();
  let res = 0;

  arrNum.forEach(function (elem, index) {
    if (elem > 1) return "Не корректный ввод";
    if (elem == 1) res += 2 ** index;
  });

  return res;
};

// Из десятичной

const decToBin = (num2) => {
  let arrRes = [];
  let num = num2;

  while (num !== 0) {
    arrRes.push(num % 2);
    num = Math.floor(num / 2);
  }

  return arrRes.reverse().join("");
};

// Из десятичной второй вариант, с применением рекурсии.

let res = [];
const rec = (num1) => {
  if (num1 == 0) return res.reverse().join("");

  res.push(num1 % 2);
  return rec(Math.floor(num1 / 2));
};
