//인터페이스 필요 이유

// 객체의 구조를 설명하기 위해서 사용
// 클래스가 인터페이스를 이해하고 준수해야 하는 약속처럼 사용할 수 있기 때문이다.
// 구체적인 구현보다 다른 클래스 간의 기능을 공유하기 위해 사용

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

//상속은 한개만 가능하지만 인터페이스는 쉼표로 구분하여 여러개를 구현 할 수 있다.
class Person implements Greetable {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {
    console.log(phrase + "" + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");

user1.greet("hi there- I am");
console.log(user1);
