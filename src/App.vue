<script setup>
import TabBar from './components/TabBar.vue'
</script>

<template>
  <router-view></router-view>
  <div class="nav-bar">
    <TabBar />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Alegreya');

h1,
h2 {
  font-family: Alegreya;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #FFFFFF;
  text-align: left;
}

.nav-bar {
  width: 100%;
  position: fixed;
  height: 8%;
  bottom: 0;
  left: 0;
  box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.12);
}
</style>
