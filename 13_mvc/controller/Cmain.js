const comment = require("../model/Comment");

/*
 GET / 
*/
exports.main = (req, res) => {
  res.render("index");
};

// GET comments
exports.comments = (req, res) => {
  console.log(comment.commentInfos());
  res.render("comments", { commentInfos: comment.commentInfos() });
};
// GET comment/:id
exports.comment = (req, res) => {
  const comments = comment.commentInfos();
  console.log(req.params);
  const commentId = req.params.id;
  console.log("commentId", commentId);
  console.log(comments[commentId - 1]);
  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }
  if (isNaN(commentId)) {
    res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
