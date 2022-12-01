const number = 1;
const num2 = number;

console.log(num2);

const person = {
  name: "MAX",
};

//객체를 복사하는 것이 아닌 상수 person에는 메모리에 있는 주소를 가리키는 포인터를 저장
const secondPerson = person;

person.name = "Manu";

console.log(secondPerson);
