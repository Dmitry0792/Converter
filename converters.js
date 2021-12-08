
/*   Конвертор из двоичной в десятичную систему счисления (и наоборот),
     на данный момент работает только с целыми числами.                             */


const twoToTen = (num1) => {
  let arrNum = num1.split("").reverse();
  let res = 0;
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 1) {
      return "Не корректный ввод";
    }
    if (arrNum[i] == 1) {
      res += 2 ** i;
    }
  }
  return res;
};


const tenToTwo = (num2) => {
  let arrRes = [];
  let num = num2;
  while (num !== 0) {
    arrRes.push(num % 2);
    num = Math.floor(num / 2);
  }
  return arrRes.reverse().join("");
};

  
//  Вторая версия tenToTwo , с применением рекурсии.

let res = [];
  const tr = num1 => {
    if ( num1 == 0) {
      return res;
    }
    res.push(num1 % 2);
    return tr (Math.floor(num1 / 2));
  }

console.log( tr(14));
