const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { appendFile } = require("fs");

//middleWare

//urlencoded 본문만 구문 분석하고 Content-Type 헤더가 type 옵션과 일치하는 요청만 보는 미들웨어를 반환합니다.
//extended: false << 비표준 대상의 분석이 가능한지를 나타낸다.
//use는 모든 http에 반응한다.
server.use(bodyParser.urlencoded({ extended: false }));

//바로 읽기 액세스를 허용하고자 하는 폴더(여러개의 정적 폴더 등록 가능)
server.use(express.static(path.join(__dirname, "public")));

//경로 필터링
server.use("/admin", adminRoutes);
server.use(shopRoutes);

//404 에러
server.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

server.listen(4000);
