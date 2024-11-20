// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log("back");
//     cb("back");
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(() => {
//     cb("callback hell");
//   }, 1000);
// }

// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "을 실행했구나");
//     hell(function (msg) {
//       console.log("여기는" + msg);
//     });
//   });
// });

function call1(name, cb) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      cb(name);
      resolve();
    }, 1000);
  });
}

function back1(cb) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      cb("back");
      resolve();
    }, 1000);
  });
}

function hell1(cb) {
  setTimeout(() => {
    cb("callback hell");
  }, 1000);
}

call1()
  .then(() => {
    return back1();
  })
  .then(() => {
    return hell1;
  });
