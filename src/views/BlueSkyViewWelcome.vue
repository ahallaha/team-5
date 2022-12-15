<script setup>
import BottomButton from '../components/BottomButton.vue'
import router from '../router'

const nextAction = () => {
        router.push('/welcome/2')
}
</script>

<template>
    <div class="main">
      <h2 class="bs-header">Blue Skies</h2>
        <div class="header-image-wrapper">
            <img src="/heading/partial_clouds_image.png" />
        </div>
        <div class="content">
            <h1>Welcome to Blue Skies</h1>
        </div>
        <BottomButton @bottom-button-clicked="nextAction" text="Get started!"></BottomButton>
    </div>
</template>

<style scoped>
.main {
    padding: 1rem;
    background-color: #e7fbff;
    height: 100vh;
    margin: 0;
}

.bs-header {
  padding: 2rem;
  text-align: center;
}

.content {
    margin-left: 70px;
    margin-right: 70px;
    margin-bottom: 16rem;
    text-align: center;
}

p {
    font-size: 22px;
    line-height: 30px;
    font-family: Alegreya;
    margin: 2rem 0;
}

.header-image-wrapper {
    text-align: center;
    padding-top: 1rem;
}
</style>