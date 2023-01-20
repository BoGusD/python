//unknown !== any
//any는 타입을 관여하지 않지만 unkown은 타입을 확인하는 제한적인 타입
//그러므로 어떤 타입을 수행하는지 확실하게 명시할 수 있다.
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

// //never
// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "Max";
// if (typeof userInput === "string") {
//   userName = userInput;
// }
// // 이 함수는 기본적으로 값을 생성하지 않음 기본적인 타입은 void로 인식되지만 never로도 활용 가능
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }
// generateError("An error occurred!", 500);

//callback
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// //undefined 타입스크립트는 값을 반환하지 않는 반환문이 있다고 여긴다.
// function printResult(num: number): undefined {
//   console.log("Result" + num);
//   return;
// }

// //callback 타입에 void를 지정하면 기본적으로 여기서 반환할 수 있는 모든 결과를 무시하게 된다.
// function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
//   const result = n1 + n2;
//   cb(result);
// }

// let combineValues: (a: number, b: number) => number;

// combineValues = add;
// // combineValues = printResult;
// // combineValues = 5;

// console.log(combineValues(8, 8));

// // let someValue: undefined;

// //return을 안하게 됨
// addAndHandler(10, 20, (result) => {
//   console.log(result);
// });

// // undefined
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// //undefined 타입스크립트는 값을 반환하지 않는 반환문이 있다고 여긴다.
// function printResult(num: number): undefined {
//   console.log("Result" + num);
//   return;
// }

// printResult(add(5, 12));

// let combineValues: (a: number, b: number) => number;

// combineValues = add;
// // combineValues = printResult;
// // combineValues = 5;

// console.log(combineValues(8, 8));

// // let someValue: undefined;

//void
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// function printResult(num: number): void {
//   console.log("Result" + num);
// }
// console.log(printResult(add(5, 12)));

//type alias
// type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-text';

// function combine(
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: ConversionDescriptor
// ) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
//   // if (resultConversion === 'as-number') {
//   //   return +result;
//   // } else {
//   //   return result.toString();
//   // }
// }

// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);

// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames);

//literal
// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: 'as-number' | 'as-text'
// ) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
//   // if (resultConversion === 'as-number') {
//   //   return +result;
//   // } else {
//   //   return result.toString();
//   // }
// }

// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);

// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames);

//union

// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
// }
// const combineAges = combine(30, 26);
// console.log(combineAges);

// const combineNames = combine("Max", "Anna");
// console.log(combineNames);

// const person: {
//   name: string;
//   age: number;
// } = {
// const ADMIN = 0;
// const READ_ONLY = 0;
// const AUTHOR = 2;

//enum

// enum Role {
//   ADMIN = "ADMIN",
//   READ_ONLY = 100,
//   AUTHOR = 200,
// }

//tuple
// const person = {
//   name: "Maximilain",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   //튜플은 항상 두 개의 요소를 지녀야하고 사용자는 한가지 role만 가질 수 있고, role은 두개의 요소로만 구성된다.
//   role: Role.ADMIN,
// };
// // person.role.push("admin");
// // person.role[1] = 10;
// // person.role = [0, "admin", "user"];

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];
// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   //   //map은 배열에서 사용할 수 있지만 문자열에서 사용 불가능: 타입추론의 장점
//   //   console.log(hobby.map());
// }
// if (person.role === Role.AUTHOR) {
//   console.log("is admin");
// }
