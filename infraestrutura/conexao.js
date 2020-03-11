const mssql = require('mssql')

const conexao = new mssql.ConnectionPool({
  user: 'teknisa',
  password: 'teknisa',
  server: 'TEK-PDT007\\SQLEXPRESS',
  database: 'agendapetshop',
})

// conexao = mssql.connect('mssql://teknisa:teknisa@TEK-PDT007\SQLEXPRESS/master')

// const conexao = mssql.connect({
//   host: 'localhost',
//   port: 3306,
//   user: 'teknisa',
//   password: 'teknisa',
//   database: 'agenda-petshop'
// })

module.exports = conexao
