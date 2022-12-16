<script setup>
import BottomButton from '../components/BottomButton.vue'
import WhatsImportantButtonContainer from '../components/WhatsImportantButtonContainer.vue'
import router from '../router'


const screeningButtons = [
{
        text: "My hobbies",
        id: "a",
    },
    {
        text: "Being social",
        id: "b",
    },
    {
        text: "Being active",
        id: "c",
    },
    {
        text: "Reading",
        id: "d",
    },
    {
        text: "Taking care of my health",
        id: "e",
    },
]

const nextAction = () => {
        router.push('/welcome/4')
}
</script>

<template>
    <div class="main">
      <h2 class="bs-header">Blue Skies</h2>
        <div class="header-image-wrapper">
            <img src="/heading/tree_image.png" />
        </div>
        <div class="content">
            <h1>Tell us what's important to you by selecting some of your values below.</h1>
            <p>I value...</p>
        </div>
        <WhatsImportantButtonContainer :options="screeningButtons"></WhatsImportantButtonContainer>
        <div class="bb-wrapper">
            <BottomButton @bottom-button-clicked="nextAction" text="Next"></BottomButton>
        </div>
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
    margin-left: 20px;
    margin-right: 20px;
    /* margin-bottom: 8.5rem; */
    text-align: center;
}

p {
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    font-family: Alegreya;
    margin: 2rem 0;
}

.header-image-wrapper {
    text-align: center;
    padding-top: 1rem;
}

.bb-wrapper {
    margin-top: 2.5rem;
}
</style>