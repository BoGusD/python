function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // n1과 n2의 타입 확인 불린자를 사용할 때
  /**typeof 개발 도중에 끝나는 변수와 매개변수의 타입을 정의한다는 것을 의미**/
  // if (typeof n1 !== "number" && typeof n2 === "number") {
  //   throw new Error("Incorrect input!");
  // }

  if (showResult === true) {
    //아래와 같이 콘솔을 단독 찍었을때는 전부 문자열로 출력
    console.log(phrase + n1 + n2);
    //리펙토링
    //타입 추론에 의해 result가 number << 타입스크립트 기능
    const result = n1 + n2;
    console.log(phrase + result);
  }
  return n1 + n2;
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "result is";

add(number1, number2, printResult, resultPhrase);
