const express = require("express");
const bodyParser = require("body-parser");

const server = express();

//middleWare

//urlencoded 본문만 구문 분석하고 Content-Type 헤더가 type 옵션과 일치하는 요청만 보는 미들웨어를 반환합니다.
//extended: false << 비표준 대상의 분석이 가능한지를 나타낸다.
//use는 모든 http에 반응한다.
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type+"text" name="title"><button type="submit">Add Product</button></input></form>'
  );
});
server.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

server.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

server.listen(4000);
