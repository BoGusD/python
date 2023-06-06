// interface도 가능
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// 오버로드
// 자체적으로 반환타입을 정확히 추론하지 못하는 경우에 유용하다.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "Schwarz");
result.split("");

//선택적 체이닝 >> 객체 데이터의 중첩된 속성과 객체에 안전하게 접근 할 수 있게 해준다.
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own Company" },
};
console.log(fetchedUserData?.job?.title);

//Null 병합 ( ??) >> null이나 undefined 아닌 이상 해당값을 사용하는 것

const userInput = "";

const storedData = userInput ?? "DEFAULT";

console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  //객체에는 속성이 있는지 여부는 알려주지 않는다. ( 타입가드의 필요성)

  //타입가드 특정 속성이나 메소드를 사용하기 전에 그것이 존재하는지 확인하거나 타입을 사용하기 전에
  //이 타입으로 어떤 작업르 수행할 수 있는지를 확인하는 개념 또는 방식을 나타내는 용어
  //객체의 경우 instance of나 in을 사용하여 수행할 수 있고 다른 타입의 경우 typeof를 사용할 수 있다.
  //   if (typeof emp == "object") {

  //if 문 타입가드
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("startDate: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving ...");
  }
}
class Truck {
  drive() {
    console.log("Driving a Truk...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo ...." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

//클래스 사용 가능 이유 자바스크립트가 클래스와 생성자 함수를 지원하기 때문
//인터페이스는 사용 불가
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//구별된 유니언
//오타의 위험을 없애줌
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

let moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed:" + speed);
};

moveAnimal({ type: "bird", flyingSpeed: 10 });

//형 변환 : 타입스크립트가 직점 감지하지 못하는 특정 타입의 값을 타입스크립트에 알려줌
// 두가지 방법으로 알려줄수 있음

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

if (userInputElement) {
  userInputElement.value = "Hi, there!";
}

// 인덱스 속성을 활용하여 유효성검사를 통해 사용할 때
interface ErrorContainer {
  // { email: ' Not a valid email', username: " Must start with a charcter!"}

  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: " Not a valid email",
  username: "Must start with a capital character!",
};

//오버로드
