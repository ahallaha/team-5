<script setup>
import BottomButton from '../components/BottomButton.vue'
import DoneButton from '../components/DoneButton.vue'
import router from '../router'

const nextAction = () => {
    router.push('/gethelp')
}
</script>

<template>
    <div class="main">
        <div class="header-image-wrapper">
            <img src="/heading/hotairballon_image.png" />
        </div>
        <div class="content">
            <h1>We can help you find help.</h1>
            <p>Click below for options to help you with your emotional needs.</p>
        </div>
        <div class="bb-wrapper">
            <BottomButton @bottom-button-clicked="nextAction" text="See help options"></BottomButton>
            <DoneButton></DoneButton>
        </div>
    </div>
</template>

<style scoped>
.main {
    padding: 1rem;
    background-color: #e7fbff;
    height: 100vh;
}

.content {
    margin-left: 25px;
    margin-right: 25px;
    text-align: center;
}

.content > h1 {
    padding: 0 2rem;
}

p {
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    font-family: Alegreya;
    margin: 2rem 0;
}

.header-image-wrapper {
    text-align: center;
    padding-top: 6rem;
    margin-bottom: 3rem;
}
.bb-wrapper {
    margin-top: 5.2rem;
}
</style>