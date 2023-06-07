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
//T extends object >> T타입이 어떤 구조를 가지든 상관없지만 일단은 객체여야 한다는 조건 (제약 조건)
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

//제너릭 다른 함수
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got" + element.length + "elements.";
  }
  return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));

//keyof 활용
function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value:" + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

//제네릭 클래스
//어떠한 원시값이든 기존 타입 보존 가능
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); //-1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// // 아래와 같이 원시 값을 추가하여 원하는 방식으로 코드가 동작하게 설정
// const maxObj = { name: "Max" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Manu" });

/**  다음과 같은 상황에선  이전에 추가된 name:max 객체와 제거 되야되는 max 객체가 메모리가 다른 객체이기 때문에
제거가 되지 않는다.**/
// objStorage.removeItem({ name: "Max" });
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Partial: 우리가 만든 타입 모든 속성을 선택적인 객체타입으로 바꾼다. 타입스크립트가 내장된 타입
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonly 타입 속성값 변경 불가능하게 조건 설정
const names: Readonly<string[]> = ["Max", " Anna"];
// names.push("Manu");
// names.pop();

/** 유니언타입vs 제네릭 타입
 * 유니언타입은 함수를 호출할 때마다 이 타입들 중 하나로 호출할 수 있는 함수가 필요한경우에 유용
 * 제네릭 타입은 특정 타입을 고정하거나 생성한 전체 클래스 인스턴스에 걸쳐 같은 함수를 사용하거나,
 * 전체 함수에 걸쳐 같은 타입을 사용하고자 할 때 유용
 */
