<script setup>
import HelloWorld from './components/HelloWorld.vue'
import monsterGet from './components/monsterGet.vue'
// import MyForm from './components/MyForm.vue'
// import ApiQuery from './components/ApiQuery.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <h1>netHack API: Rquest Data</h1>
  </div>
  
  <!-- <ApiQuery /> -->
  <monsterGet />
  <!-- <HelloWorld msg="The best api ever" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
