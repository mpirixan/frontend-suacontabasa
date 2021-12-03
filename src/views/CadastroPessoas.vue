<template>
<div class="cadastroPessoas">
    <h1> Cadastro de Pessoas</h1>
    <img alt="Basa Logo" src="../assets/logo-header-2.png">
    <Cadastro-pe msg="Cadastro de Pessoas"/>
</div>
</template>

<script>
import CadastroPe from '../components/CadastroPe.vue'

export default {
  components: {
    CadastroPe
  }
}
</script>

<style lang="stylus" scoped>
img
  margin: 20px

.cadastroPessoas{
  background: rgba(37, 62, 62, 0.7)
  color: #fff
}
</style>
