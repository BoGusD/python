// 다음과 예제외 같이 사용
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

//스프레드 연산자

const person = {
  name: "MAX",
};

const newPerson = {
  ...person,
  age: 28,
};
console.log(newPerson);

//나머지 연산자

const filter = (...args) => {
  //다음과 같이 매개변수에 통합가능
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));
