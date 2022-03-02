const mysql = require('mysql2')

const config = require('./config')

const pool = mysql.createPool({
  host: config.M,
  user: 'root',
  password: '123456',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

pool.getConnection(function (err, conn) {
  if (err) console.log('SQL connection failed! ' + err)
  else console.log('SQL connection succeeded! ')
})