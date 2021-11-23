<template>
<div class="cadastroContas">
    <h1> Cadastro de Contas</h1>
    <img alt="Basa Logo" src="../assets/basalogo.jpg">
    <CadastroCo msg="Cadastro de Contas"/>
</div>
</template>

<script>
import CadastroCo from '../components/CadastroCo.vue'

export default {
  components: {
    CadastroCo
  }
}

</script>
<style lang="stylus" scoped>
img
  margin: 20px

</style>
