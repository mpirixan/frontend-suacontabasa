<template>
    <div class="cadastroPessoas">
        <h2>Cadastrar Pessoas na Plataforma</h2>
            <form id="cadastro">
                <label for="idFiscal">CPF/CNPJ:</label>
                <input type="number" id="idFiscal" />
            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" />
            </div>
            <div>
                <label for="dataNasc">Data de Nascimento:</label>
                <input type="text" id="dataNasc" />
            </div>
            <div>
                <label for="tipoPessoa">Tipo de Pessoa:</label>
                <input type="text" id="tipoPessoa" />
            </div>
            <div id="cadastro">
                <button v-on:click="cadastro()">Cadastro</button>
            </div>
            </form>
    </div>
</template>

<script>
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

export default {
  methods: {
    cadastro () {
      cadastro()
    }
  }

}

</script>

<style lang="stylus">
h2
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
