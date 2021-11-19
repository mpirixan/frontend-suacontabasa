<template>
    <div class="cadastroPessoas">
        <h2>Cadastrar Pessoas na Plataforma</h2>
              <div class="grid-container">
                  <div class="grid-labels">
                    <label for="idFiscal">CPF/CNPJ:</label>
                    <label for="nome">Nome:</label>
                    <label for="dataNasc">Data de Nascimento:</label>
                    <label for="tipoPessoa">Tipo de Pessoa:</label>
                  </div>
                  <div class="grid-inputs">
                    <input type="number" id="idFiscal" />
                    <input type="text" id="nome" />
                    <input type="date" id="dataNasc" />
                    <input type="text" id="tipoPessoa" />
                  </div>
                  <div class="grid-item">
                      <div id="cadastro">
                        <button v-on:click="cadastro()">Cadastro</button>
                      </div>
                  </div>
              </div>
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
.grid-labels{
   grid-column: 1 / 1
   grid-row: 1 / 6
}
.grid-inputs{
 grid-column: 2
 grid-column: 1 / 5
}
.grid-container {
  display: inline-grid
  grid-template-rows: 80px 80px 80px 80px 80px 80px 80px
  grid-template-columns: 200px auto auto
}
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

label
  color yellow
  margin 0 10px
  padding: 1px
  border: 2px solid #13b523
  border-radius: 5px
  background-color: lightblue;

input
  width: 100%
  padding: 2px
  margin: 20px
button
  color #23b123

</style>
