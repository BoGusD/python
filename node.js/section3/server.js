// node.js에 탑재된 http 모듈
const http = require("http");
const fs = require("fs");

//익명 함수를 사용하여 통신  => 이벤트 드리븐 아키텍쳐
//req=> request, res=> response
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter a Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="sumbit">Send</button></input></body>'
    );
    res.write("</html>");
    return res.end();
  }

  //   console.log(req.url, req.method, req.headers);
  //event loop를 종료하여 프로그램을 종료
  //   process.exit();

  //응답 예시
  if (url === "/message" && method == "POST") {
    const body = [];

    // on 메서드는 특정 이벤트를 들을 수 있도록 한다.
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    //청크를 다루기 위해서는 버퍼가 필요하다
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      //아래 코드는 서버 응답후에 실행됨 >> 응답이 발송된 후에도 이벤트 리스너는 계속 실행된다.
      // writeFile : 코드 실행을 막는 특정한 메서드
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First P age</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

/** 
 node.js가 스크립트를 바로 종료하지 않고 계속 실행하면서 듣게 한다.
 첫번째 인자는 포트 번호
*/
server.listen(4000);
