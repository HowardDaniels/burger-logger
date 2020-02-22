var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "testtest",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
// Set up our connection information
 connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "testtest",
  database: "burgers_db"
});
}

module.exports = connection;