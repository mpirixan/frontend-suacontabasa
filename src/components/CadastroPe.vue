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
                    <input type="text" placeholder="YYYY-MM-DD"
                          onfocus="(this.type='date')"
                          onblur="(this.type='text')" id="dataNasc" />
                    <input type="text" id="dataNasc" />
                    <select id="tipoPessoa" style="flex-grow: 1">
                      <option value="FISICA"> Conta Corrente</option>
                      <option value="JURIDICA">Conta Poupança</option>
                    </select>
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
  const axios = require('axios').default
  var idFiscal = document.getElementById('idFiscal').value
  var nome = document.getElementById('nome').value
  var dataNasc = document.getElementById('dataNasc').value
  var tipoPessoa = document.getElementById('tipoPessoa').value

  dataNasc = String(dataNasc)
  axios.post('http://localhost:8080/api/v1/pessoas/cadastro', {
    idFiscal: idFiscal,
    nome: nome,
    dataNascimento: dataNasc,
    tipoPessoa: tipoPessoa
  })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
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
  grid-area: Label
  display: inline-grid
  justify-items: center
  align-items: center
  }

.grid-inputs{
  grid-area: Inputs
  display: inline-grid
  justify-items: center
  align-items: center}

.grid-item{
  grid-area: Button}

.grid-container{
  background: lightblue
  border: 2px solid #13b523
  border-radius: 3px
  display: inline-grid
  grid-template-columns: 1fr 1fr
  grid-template-rows: 1fr 1fr 1fr 1.1fr 0.8fr 1.1fr
  gap: 0px 0px
  grid-template-areas:
    "Label Inputs"\
    "Label Inputs"\
    "Label Inputs"\
    "Label Inputs"\
    "Label Inputs"\
    "Button Button"
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
  display: grid
  color dark
  margin 30px

input
  display: grid
  height: 18%
  width: 90%
  margin: 10px

button
  color dark
  width: 50%
  height: 50%
</style>
