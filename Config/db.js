const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',        
  user: 'root',           
  password: '',     
  database: 'api'  
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = connection;
