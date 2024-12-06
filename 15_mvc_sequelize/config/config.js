require("dotenv0").config();
/*{
  "development": {
    "username": "sesac",
    "password": "1234",
    "database": "sesac",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


DB_PASSWORD=1234
DB_DATABASE=sesac
DB_HOST=127.0.0.1
DB_USERNAME=sesac

PORT=8080

DB_PROD_PASSWORD=1234
DB_PROD_DATABASE=sesac
DB_PROD_HOST=11.111.111.11
DB_PROD_USERNAME=sesac
 */
const development = {
  username: Process.env.DB_USERNAME,
  password: Process.env.DB_PASSWORD,
  database: Process.env.DB_DATABASE,
  host: Process.env.DB_HOST,
  dialect: "mysql",
};

const production = {
  username: Process.env.DB_PROD_USERNAME,
  password: Process.env.DB_PROD_PASSWORD,
  database: Process.env.DB_PROD_DATABASE,
  host: Process.env.DB_PROD_HOST,
  dialect: "mysql",
};

module.exports = { development, production };
