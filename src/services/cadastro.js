// eslint-disable-next-line no-unused-vars
function cadastro () {
  var xhr = new XMLHttpRequest()
  var idFiscal = document.getElementById('idFiscal').value
  var nome = document.getElementById('nome').value
  var dataNasc = document.getElementById('dataNasc').value
  var tipoPessoa = document.getElementById('tipoPessoa').value

  const jsonObj =
{
  idFiscal: idFiscal,
  nome: nome,
  dataNasc: dataNasc,
  tipoPessoa: tipoPessoa
}
  var dataBase = JSON.stringify(jsonObj)
  const myURL = 'http://localhost:8080/api/v1/pessoas/cadastro'

  console.log(jsonObj)
  console.log(dataBase)
  xhr.open('POST', myURL, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(jsonObj))
}
