<template>
<div class="container">
  <div class="title">
    <img alt="Basa Logo" src="../assets/logo-header-2.png">
  </div>
  <div class="cadastroPe">
    <Cadastro-pe msg="Cadastro de Pessoas"/>
  </div>
  <div class="cadastroCo">
    <CadastroCo msg="Cadastro de Contas"/>
  </div>
  <div class="Submit1"></div>
  <div class="Submit2"></div>
  <div class="home"></div>
</div>
</template>
<script>
import CadastroPe from '../components/CadastroPe.vue'
import CadastroCo from '../components/CadastroCo.vue'
export default {
  components: {
    CadastroPe,
    CadastroCo

  }
}

</script>

<style lang="stylus" scoped>
.container {
  display: inline-grid
  grid-template-columns: 1fr 1fr
  grid-template-rows: 0.5fr 1.5fr 0.3fr 1.7fr
  grid-auto-columns: 1fr
  grid-auto-rows: 1fr
  gap: 0px 0px
  grid-auto-flow: row
  grid-template-areas:
    "title title"\
    "cadastroPe cadastroCo"\
    "Submit1 Submit2"\
    "home home"
}

.title {
    grid-area: title
    margin: 20px }

.cadastroPe {
    grid-area: cadastroPe }

.cadastroCo {
    grid-area: cadastroCo }

.Submit1 {
    grid-area: Submit1 }

.Submit2 {
    grid-area: Submit2 }

.home {

  justify-self: center
  align-self: center
  grid-area: home
  width: 500px
  height: 20%
}

</style>
