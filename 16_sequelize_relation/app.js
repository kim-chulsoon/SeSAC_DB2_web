const express = require("express");
const app = express();
const PORT = 8080;
const { sequelize } = require("./models/Mindex");
// db={sequelize:~~~, Sequelize:~~~}
// const {sequelize} = db;

// middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// sync()
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("db connection error");
    console.log(err);
  });
