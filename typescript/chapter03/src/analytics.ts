let logged;

//변수의 경우는 any타입이어도 문제가 안되지만 매개변수 any면 문제가 된다.
function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
  //변수의 경우는 할당된 값을 추적이 가능하여, 에러가 생성되지 않음
  console.log(logged);
}
sendAnalytics("The data");
