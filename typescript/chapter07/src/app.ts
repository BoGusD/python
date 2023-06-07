// 제네릭 타입 ex: <string>
// const names: Array<string> = []; // string[]
// names[0].split(" ");

//비동기일 때
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

//병합시에는 형변환보단 제네릭타입이 더 활용가치가 높음
//다른 함수 호출에 대해 다양한 구체적인 타입을 작성할 수 있다.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
