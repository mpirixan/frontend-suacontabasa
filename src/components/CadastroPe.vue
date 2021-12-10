<template>
    <div class="cadastroPessoas">
        <h2>Cadastrar Pessoas na Plataforma</h2>
              <div class="grid-container">
                  <div class="grid-labels">
                    <label for="idFiscal">CPF/CNPJ:</label>
                    <label for="nome">Nome Completo:</label>
                    <label for="dataNasc">Data de Nascimento:</label>
                    <label for="tipoPessoa">Tipo de Pessoa:</label>
                  </div>
                  <div class="grid-inputs">
                    <input type="number" id="idFiscal" />
                    <input type="text" id="nome" />
                    <input type="text" placeholder="YYYY-MM-DD"
                          onfocus="(this.type='date')"
                          onblur="(this.type='text')" id="dataNasc" />
                    <select id="tipoPessoa" style="width:200px">
                      <option value="FISICA"> Física</option>
                      <option value="JURIDICA">Jurídica</option>
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
      const jsonObj = JSON.stringify(response.data, undefined, 4)
      window.alert('Dados salvos com sucesso\n' + jsonObj)
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

<style lang="stylus" scoped>
@import '../styles/cadastros.styl'
</style>
