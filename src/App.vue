<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" custom v-slot="{ navigate }">
        <button @click="navigate" @keypress.enter="navigate" role="link">Home</button>
      </router-link>
      <router-link to="/CadastroPessoas" custom v-slot="{ navigate }">
        <button @click="navigate" @keypress.enter="navigate" role="link">Pessoas</button>
      </router-link>
      <router-link to="/CadastroConta" custom v-slot="{ navigate }">
      <button @click="navigate" @keypress.enter="navigate" role="link"> Contas</button>
      </router-link>
      <router-link to="/busca" custom v-slot="{ navigate }">
          <button @click="navigate" @keypress.enter="navigate" role="link">Busca</button>
      </router-link>
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
