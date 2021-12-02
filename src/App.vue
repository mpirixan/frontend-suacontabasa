<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" tag="button">Home</router-link>
      <router-link to="/CadastroPessoas" tag="button">Cadastro Pessoas</router-link>
      <router-link to="/CadastroConta" tag="button">Cadastro Contas</router-link>
      <router-link to="/busca" tag="button">Busca</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
