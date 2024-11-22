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
