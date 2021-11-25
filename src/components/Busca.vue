<template>
    <div class="buscarPessoas">
        <h2>Buscar Pessoas na Plataforma</h2>
            <div class="container">
                <div class="Buscar">
                  <div id="busca">
                    <h3>Por Nome</h3>
                    <input type="text" id="nome" Nome />
                    <button v-on:click="buscaNome()">Buscar</button>
                    <h3>Por identificação fiscal</h3>
                    <input type="number" id="idFiscal" IdFiscal />
                    <button v-on:click="buscaIdFiscal()">Buscar</button>
                  </div>
                  </div>
                <div class="Dados">
                  <pre id="response" style=
                    "color:red; font-size: 20px; font-weight: bold;">
                  </pre>
                </div>
            </div>
    </div>
</template>

<script>
function buscaNome () {
  var nome = document.getElementById('nome').value
  const axios = require('axios').default
  axios.get('http://localhost:8080/api/v1/pessoas/nome/' + nome)
    .then(function (response) {
      console.log(response.data)
      const jsonObj = JSON.stringify(response.data, undefined, 4)
      document.getElementById('response').innerHTML = jsonObj
    })
    .catch(function (error) {
    // handle error
      console.log(error)
    })
    .then(function () {
    // always executed
    })
}

function buscaIdFiscal () {
  var idFiscal = document.getElementById('idFiscal').value
  const axios = require('axios').default
  axios.get('http://localhost:8080/api/v1/pessoas/cpf-cnpj/' + idFiscal)
    .then(function (response) {
      console.log(response.data)
      const jsonObj = JSON.stringify(response.data, undefined, 4)
      document.getElementById('response').innerHTML = jsonObj
    })
    .catch(function (error) {
    // handle error
      console.log(error)
    })
    .then(function () {
    // always executed
    })
}
export default {
  methods: {
    buscaNome () {
      buscaNome()
    },
    buscaIdFiscal () {
      buscaIdFiscal()
    }
  }
}
</script>

<style lang="stylus">
.container {
  display: grid
  grid-auto-rows: 1fr
  grid-template-columns: 1fr
  grid-template-rows: 1fr 0.8fr
  gap: 0px 0px
  grid-template-areas:
    "Buscar"\
    "Dados";
}

.Buscar { grid-area: Buscar
  display: inline-grid
  justify-items: center
  align-items: center
}
.Dados { grid-area: Dados
  display: inline-grid
 }

h2
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 10 10px

a
  color #42b983

input
  display: grid
  height: 18%
  width: 600px
  margin: 20px

button
  width: auto
  height: 50%
</style>
