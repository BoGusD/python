//인터페이스 필요 이유

// 객체의 구조를 설명하기 위해서 사용
// 클래스가 인터페이스를 이해하고 준수해야 하는 약속처럼 사용할 수 있기 때문이다.
// 구체적인 구현보다 다른 클래스 간의 기능을 공유하기 위해 사용
// 인터페이스는 인스턴스화 할 수 없으며 컴파일되지 않는 반면, 클래스는 인스턴스화할 수 있으며 컴파일된다.
// 객체를 서술하지만 유니온 타입과 같은 임의 타입을 저장하거나 서술하지 않는다.

// 함수형

// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

//인터페이스 확장
//물음표를 사용하여 선택적 매개변수로 만듬
//물음표를 사용하여 선택적 옵션을 클래스에 입력하면 모든 경우마다 값을 할당할 필요가 없다.
interface Named {
  readonly name?: string;
  outputName?: string;
}

// 인터페이스 경우 여러 인터페이스로부터 상속 받을 수 있음
interface Greetable extends Named {
  greet(phrase: string): void;
}

//상속은 한개만 가능하지만 인터페이스는 쉼표로 구분하여 여러개를 구현 할 수 있다.
class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + "" + this.name);
    } else {
      console.log("Hi");
    }
  }
}

let user1: Greetable;
//readonly이기에 오류생김
// user1.name="Manu"

user1 = new Person();

user1.greet("hi there- I am");
console.log(user1);
