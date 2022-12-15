<script setup>
import BottomButton from '../components/BottomButton.vue'
import router from '../router'

// const headingContent = `Can you describe the things that are making you feel this way?`
const nextAction = () => {
    router.push('/')
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
        <ScreeningButtonContainer :options="screeningButtons"></ScreeningButtonContainer>
        <BottomButton @bottom-button-clicked="nextAction" text="Next"></BottomButton>
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

}

p {
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    font-family: Alegreya;
    margin: 2rem 0;
}

/* .header-image {
    width: 191px;
    height: 162px;
    left: 87px;
    top: 113px;
} */

.header-image-wrapper {
    text-align: center;
    padding-top: 6rem;
}

/* .screeners {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 14px;
    height: 150px;
}

.screener {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    color: #4949c9;
    background-color: #e7fbff;
    border-style: solid;
    border-color: #4949c9;
    padding: 4px 14px;
    border-radius: 50px;
    max-height: 47px;
} */
</style>