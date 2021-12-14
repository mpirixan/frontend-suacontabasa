<template>
<div class="container">
<div class="title">
    <h1>Seja Bem Vindo(a) ao Sistema!</h1>
    <h3>Sua Conta Basa - Gold</h3>
</div>
<div class="logo">
</div>
    <div class = "opcoes">
        <router-link to="/Login" custom v-slot="{ navigate }">
            <button @click="navigate" @keypress.enter="navigate" role="link">Login</button>
        </router-link>
        <p>-</p>
        <router-link to="/Cadastros" custom v-slot="{ navigate }">
            <button @click="navigate" @keypress.enter="navigate" role="link">Cadastros</button>
        </router-link>
    </div>
</div>
</template>
<script>
</script>

<style lang="stylus" scoped>
@import '../styles/comuns.styl'
.container {
  display: inline-grid
  grid-auto-columns: 1fr
  grid-auto-rows: 1fr
  grid-template-columns: 1fr
  grid-template-rows: 200px 200px 300px
  gap: 01% 0px
  grid-template-areas:
    "title"\
    "logo"\
    "opcoes"
}
.title {
    grid-area: title
    color: #fff }
.logo {
    grid-area: logo
    background-image: url("../assets/logo-header-2.png")
    background-repeat: no-repeat }
.opcoes {
    grid-area: opcoes }
</style>
