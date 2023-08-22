const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "bogus",
  user: "root",
  database: "node-complete",
});

module.exports = pool.promise();
