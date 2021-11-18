<template>
    <div class="buscarPessoas">
        <h2>Buscar Pessoas na Plataforma</h2>
            <div id="busca">
                <button v-on:click="busca()">Buscar</button>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'busca',
  data () {
    return {
      totalVuePackages: null
    }
  },

  created () {
    // Simple GET request using axios
    axios.get('http://localhost:8080/api/v1/pessoas/nome/Fulano')
      // eslint-disable-next-line no-return-assign
      .then(response => this.totalVuePackages = response.data.total)
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
