<template>
  <q-page padding>
    <h1>Seja Bem Vindo(a) ao Sistema!</h1>
    <h3>Sua Conta Basa</h3>
    <Logo />
  </q-page>
</template>

<script>
import Logo from '../components/Logo.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    Logo
  }
}
</script>

<style lang="stylus" scoped>
h5
  text-align: center
  margin: 0
  position: absolute
  top: 50%
  left: 50%
  margin-right: -50%
  transform: translate(-50%, -50%)

</style>
