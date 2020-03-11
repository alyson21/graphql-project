const customExpress = require('./config/custom-express')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')

const app = customExpress()

conexao.connect(erro => {
  if (erro) {
    console.log(erro+ 'ERRO BD')
  }

  console.log('conectou no BD')

  Tabelas.init(conexao)
})

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000')
})
