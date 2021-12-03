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
      <div id="nav">
        <router-link to="/" custom v-slot="{ navigate }">
        <button @click="navigate" @keypress.enter="navigate" role="link">Home</button>
        </router-link>
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

  axios.post('http://localhost:8080/api/v1/contas/cadastro/' + idPessoa, {
    agencia: agencia,
    senha: senha,
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

button {
  background-color: #fff000;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  width: 50%;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:not(:disabled):hover,
button:not(:disabled):focus {
  outline: 0;
  background: #f4e603;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}
button:disabled {
  filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
}
</style>
