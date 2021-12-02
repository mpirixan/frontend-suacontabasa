<template>
<div class="cadastroContas">
    <h1> Cadastro de Contas</h1>
    <img alt="Basa Logo" src="../assets/logo-header-2.png">
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

.cadastroContas{
  background: darkgreen
  color: #fff
}
</style>
