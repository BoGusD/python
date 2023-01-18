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
