// sameFrequency(182, 281); // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  // 각 인덱스에 해당되는 문자열
  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
console.log(sameFrequency(182, 281));

// function sameFrequency(a, b) {
//   let integerA = a.toString();
//   let integerB = b.toString();
//   if (integerA.length !== integerB.length) {
//     return false;
//   }
//   const lookup = {};
//   for (let i = 0; i < integerA.length; i++) {
//     let number = integerA[i];
//     lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
//   }
//   for (let i = 0; i < integerB.length; i++) {
//     let number = integerB[i];
//     if (!lookup[number]) {
//       return false;
//     } else {
//       lookup[number] -= 1;
//     }
//   }
//   return true;
// }
