const fs = require("fs");

const requestHander = (req, res) => {
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

      // writeFile : 특정 코드가 실행될 동안 다른 코드 실행을 막는 특정한 메서드(동기화 모드)
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
};
// 임포트 시키는방법 여러가지.

// Node.js에 의해 전역으로 노출된 키워드 혹은 객체로 내보기 속성이 있다.
// module.exports = requestHander;

// 둘을 그룹화하거나 분리하면서도 하나의 내보내기만 관리할 수 있게 된다.
// module.exports = { handler: requestHander, someText: "Some hard coded text" };

//module을 생략해도 됨
exports.handler = requestHander;
exports.someText = "Some hard coded text";
