<script setup>
import BottomButton from '../components/BottomButton.vue'
import DoneButton from '../components/DoneButton.vue'
</script>

<template>
    <div class="main">
        <div class="header-image-wrapper">
            <img src="/heading/sun_image.png" />
        </div>
        <div class="content">
            <h1>That's so great you're feeling happy!</h1>
            <p>Take a moment to reflect on what is happening around you tht makes you feel so good today.</p>
            <p>Writing in your journal can help to capture the good feelings and keep them top of mind.</p>
        </div>
        <BottomButton text="View journaling activites"></BottomButton>
        <DoneButton></DoneButton>
    </div>
</template>

<style scoped>
.main {
    padding: 1rem;
    background-color: #ffffe7;
    height: 100vh;
    margin: 0;
}

.content {
    margin-left: 25px;
    margin-right: 25px;
}

p {
    font-size: 22px;
    line-height: 30px;
    font-family: Alegreya;
    margin: 2rem 0;
}

.header-image-wrapper {
    text-align: center;
    padding-top: 6rem;
}
</style>