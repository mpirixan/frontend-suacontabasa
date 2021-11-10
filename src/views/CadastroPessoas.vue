<template>
<div class="cadastroPessoas">
    <h1> Cadastro de Pessoas</h1>
    <img alt="Basa Logo" src="../assets/basalogo.jpg">
    <cadastro-pe msg="Cadastro de Pessoas"/>
</div>
</template>

<script>
import CadastroPe from '../components/CadastroPe.vue'

export default {
  name: 'Cadastro',
  components: {
    CadastroPe
  }
}
</script>

<style lang="stylus" scoped>

</style>
