class Human {
  constructor() {
    this.gender = "male";
  }
  printMygender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  //기본적인 함수이자 특정 클래스에서도 추가해서 클래스의 객체를 생성할 때마다 실행되는 메서드
  constructor() {
    super();
    this.name = "Max";
  }
  printMyname() {
    console.log(this.name);
  }
}
const person = new Person();

person.printMyname();
person.printMygender();

// refectoring

class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "MAX";
  gender = "female";

  printName = () => {
    console.log(this.name);
  };
}
const person = new Person();
person.printName();
person.printGender();
