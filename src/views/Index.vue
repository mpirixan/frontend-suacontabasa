<template>
<div class="index">
    <h1>Seja Bem Vindo(a) ao Sistema!</h1>
    <h3>Sua Conta Basa - Gold</h3>
    <Logo />
</div>
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
.Logo
  text-align: center
  margin: 0
  position: absolute
  top: 50%
  left: 50%
  height: 100%;
  width: 100%
  transform: translate(-50%, -50%)
.index
  height: 100%
  width: 100%
  color: rgba(255, 240, 0, 1)
</style>
