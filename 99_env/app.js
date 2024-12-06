const express = require("express");
// console.log(process.env);
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;
console.log("port number", PORT);
console.log("db pw", process.env.DB_PASSWORD);
console.log("db name", process.env.DB_DATABSE);

app.get("/", (req, res) => {
  res.send("get요청");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
