// node.js에 탑재된 http 모듈
const http = require("http");
const routes = require("./routes");

//익명 함수를 사용하여 통신  => 이벤트 드리븐 아키텍쳐
//req=> request, res=> response
console.log(routes.someText);

const server = http.createServer(routes.handler);

/** 
 node.js가 스크립트를 바로 종료하지 않고 계속 실행하면서 듣게 한다.
 첫번째 인자는 포트 번호
*/
server.listen(4000);
