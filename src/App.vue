<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TabBar from './components/TabBar.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div class="tab-bar"><TabBar /></div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tab-bar {
  width:100%;
  position: fixed;
  height: 8%;
  bottom: 0;
  left: 0;
}
</style>
