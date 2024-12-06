"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
console.log("config", config);
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
// let sequelize를 sequelize라는 키 안에 넣어주는 중
// {
//   sequelize : sequelize
// }
db.Sequelize = Sequelize;
// Sequelize 모듈을 Sequelize라는 키 안에 넣어주는 중
// {
//   sequelize : sequelize
//   Sequelize : Sequelize
// }

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// {
//   sequelize : sequelize
//   Sequelize : Sequelize
//   Visitor : visitor의 모델
// }

module.exports = db;
