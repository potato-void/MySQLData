const mysql = require('mysql');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
    host: "na01-sql.pebblehost.com",
    user:"customer_755600_Database1", 
    password:"+G.+nE6mdPqXrYTuU5=xxo!a",
    database:"customer_755600_Database1",
    port: 3306
});

connection.connect(function(err) {
    if (err) {
      console.log(err);
      return
    };
    console.log("Succesfully Connected to MYSQL Databse.")
});

app.get("/products/loadproductinfo", (req, res) => {
  connection.query('SELECT * FROM `ModerationConfig`', (err, results) => {
    if (err) return err;
    res.json(results)
  });
});

app.listen(3000, () => {
  console.log('Port 3000')
})
