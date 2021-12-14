<template>
<div class="container">
  <div class="title"></div>
  <div class="cadastroPe"></div>
  <div class="cadastroCo"></div>
  <div class="Submit1"></div>
  <div class="Submit2"></div>
  <div class="home"></div>
</div>
</template>
<style lang="stylus" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 1.5fr 0.3fr 1.7fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "title title"
    "cadastroPe cadastroCo"
    "Submit1 Submit2"
    "home home";
}

.title {
    grid-area: title }

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
