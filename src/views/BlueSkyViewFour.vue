<script setup>
import BottomButton from '../components/BottomButton.vue'
import router from '../router'

const nextAction = () => {
        router.push('/tasks')
}
</script>

<template>
    <div class="main">
      <h2 class="bs-header">Blue Skies</h2>
        <div class="header-image-wrapper">
            <img src="/heading/hotairballon_image.png" />
        </div>
        <div class="content">
            <h1>Great job!<br />You earned 10 points for that activity.  There's lots of way to get points to spend in the Blue Skies mall.</h1>
        </div>
        <BottomButton @bottom-button-clicked="nextAction" text="Done"></BottomButton>
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
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: -1rem;
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
    padding-top: .8rem;
}
</style>