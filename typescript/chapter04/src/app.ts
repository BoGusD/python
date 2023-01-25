// const userName = "Max";
// // userName = "Maximilian";
// let age = 30;
// age = 29;

// function add(a: number, b: number) {
//   var result;
//   result = a + b;
//   return result;
// }
// //타스 에러만 확인됨
// if (age > 20) {
//   var isOld = true;
// }
// console.log(isOld);

// // 에러 확인됨
// if (age > 20) {
//   let isOld = true;
// }
// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput = (output: string | number) => console.log(output);

// // const printOutput: (a: number | string) => void = (output) =>
// //   console.log(output);

// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(0));

const hobbies = ["Sports", "Coocking"];
const activeHobbies = ["Hikking"];
//푸시하면 메모리는 변경되지만 address는 변경되지 않음
activeHobbies.push(...hobbies);
const person = {
  firstName: "Max",
  age: 30,
};
//물론 요소는 배열에 있는 것과 같은 단일 값이 아닌 키-값 쌍
const copiedPesron = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
// const add = (...numbers: [number, number, number, number]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;
console.log(userName, age, person);
