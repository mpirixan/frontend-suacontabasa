<template>
    <div class="cadastroContas">
        <h2>Cadastrar Contas na Plataforma</h2>
        <div class="grid-container">
            <div class="grid-labels">
            <label for="idPessoa">Id Pessoa:</label>
            <label for="agencia">Agencia:</label>
            <label for="senha">Senha:</label>
            <label for="tipoConta">Tipo de Conta:</label>
            </div>
    <div class="grid-inputs">
    <input type="number" id="idPessoa">
    <select id="agencia" style="flex-grow: 1">
        <option value="98">Ananindeua - Cidade Nova</option>
        <option value="57">Ananindeua - Centro</option>
        <option value="59">Belém - Atalaia</option>
        <option value="07">Belém - Campina</option>
    </select>
    <input type="password" id="senha" />
    <select id="tipoConta" style="flex-grow: 1">
        <option value="CONTA_CORRENTE"> Conta Corrente</option>
        <option value="POUPANÇA">Conta Poupança</option>
        <option value="PJ">Conta Jurídica</option>
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
  var idPessoa = document.getElementById('idPessoa').value
  var agencia = document.getElementById('agencia').value
  var senha = document.getElementById('senha').value
  var tipoConta = document.getElementById('tipoConta').value

  axios.post('http://localhost:8080/api/v1/contas/cadastro', {
    idPessoa: idPessoa,
    agencia: agencia,
    dataVigencia: '2030-12-30',
    senha: senha,
    saldo: 0,
    status: 'ATIVA',
    tipoConta: tipoConta
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
