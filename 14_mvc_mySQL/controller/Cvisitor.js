const Visitor = require("../model/Visitor");
// console.log(Visitor.getVisitros());

/* /GET */
exports.main = (req, res) => {
  res.render("index");
};

/* /visitors GET */
exports.getVisitors = (req, res) => {
  // db 연결 전
  //   res.render("visitors", { data: Visitor.getVisitros() });

  // db 연결 후
  Visitor.getVisitros((result) => {
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
};
