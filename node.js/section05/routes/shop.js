const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // /는 운영 체제의 루트 폴더를 나타낸다. 해당 디렉터리, 최종적으로는 이 파일의 경로를 구축하려면 path 이용
  // _driname은 절대 경로를 이 프로젝트 폴더로 고정해주는 전역 변수 ( 자신이 사용된 파일의 경로를 알려준다<../routes>에 해당됨)
  res.sendFile(path.join(rootDir, "./", "views", "shop.html"));
});

module.exports = router;
