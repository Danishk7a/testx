 const mysql = require('mysql');  


 const Connection = mysql.createConnection({  
host: "localhost",  
user: "root",  
// password: "@Commercial@1a",
password: "",
database:"bcex",
// socketPath: '/var/run/mysqld/mysqld.sock'
 });  


 
Connection.connect(function (err) {
    if(err){
        console.log("Error !", err);
    }
    else{
        console.log("CONNECTION SUCCESS.");
    }
 });
 
    
module.exports = Connection;