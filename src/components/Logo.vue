<template>
    <div id="nav" style="display: flex">
      <router-link to="/CadastroPessoas" custom v-slot="{ navigate }">
        <button @click="navigate" @keypress.enter="navigate" role="link">Cadastro de Pessoas</button>
      </router-link>
      <router-link to="/CadastroConta" custom v-slot="{ navigate }">
      <button @click="navigate" @keypress.enter="navigate" role="link">Cadastro de Contas</button>
      </router-link>
      <router-link to="/busca" custom v-slot="{ navigate }">
          <button @click="navigate" @keypress.enter="navigate" role="link">Buscar informações</button>
      </router-link>
    </div>
</template>
<script>
export default {
  name: 'logo'
}
</script>
<style lang="stylus" scoped>
.nav{
  position: absolute
  top: 100%
  left: 50%
  margin-right: -50%
  transform: translate(-50%, -50%)
  height: 100vh
  width: 100vw
  }

button {
  background-color: #fff000;
  border-radius: 18px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 9px 13px;
  text-align: center;
  transition: 200ms;
  width: 50%;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:not(:disabled):hover,
button:not(:disabled):focus {
  outline: 0;
  background: #f4e603;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 2px 6px 0 rgba(0,0,0,.15);
}
button:disabled {
  filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
}
</style>
