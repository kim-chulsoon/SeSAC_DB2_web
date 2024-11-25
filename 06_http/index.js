const http = require("http");
const fs = require("fs");

const server = http.createServer(function (requset, response) {
  // console.log(requset) // 요청 객체 정보

  console.log("url: ", requset.url);

  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  // response
  // response.write('<p>응답1</p>')
  // response.write('<p>응답2</p>')
  // response.write('<p>응답3</p>')
  // response.end('<h3>응답 종료</h3>')

  try {
    // try문
    // 실행코드
    const data = fs.readFileSync("./index.html");
    response.end(data);
  } catch (err) {
    // try문에서 어떤 에러가 발생되었는지 error객체를 넘겨줌
    // try문에서 에러가 났을 때 실행된 코드
    // console.log(err)
    // response.end('<h1>page not found</h1>')

    // 404.html을 만들고
    // 파일 이름을 읽을 때 오타가 나면 404 페이지 보여주기
    const errPage = fs.readFileSync("./404.html");
    response.end(errPage);
  }
});

const PORT = 8080;

// 서버 이벤트 - connection, request
server.on("connection", function (request, response) {
  console.log("connection event 발생");
});

server.on("request", function (request, response) {
  console.log("request event 발생");
});

// 포트 열기
server.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});
