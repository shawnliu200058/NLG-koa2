const mysql = require('mysql2')

const config = require('./config')

const pool = mysql.createPool({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10
})

const connection = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10
})


pool.getConnection(function (err, conn) {
  if (err) console.log('SQL connection failed! ' + err)
  else console.log('SQL connection succeeded! ')
})

const goodJson = require('./data/good.json')
const statement = `INSERT INTO good SET ?`

goodJson.forEach(good => {
  console.log(good);
  pool.query(statement, good)
})

module.exports = pool.promise()