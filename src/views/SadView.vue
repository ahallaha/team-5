<script setup>
import BottomButton from '../components/BottomButton.vue'
import ScreeningButtonContainer from '../components/ScreeningButtonContainer.vue'
import { useStore } from "../stores/main";
import router from '../router'

const store = useStore()

store.updateIsSadPage(true)

const screeningButtons = [
{
        text: "Depressed",
        id: "a",
    },
    {
        text: "Scared",
        id: "b",
    },
    {
        text: "Lonely",
        id: "c",
    },
    {
        text: "Tired",
        id: "d",
    },
    {
        text: "Frustrated",
        id: "e",
    },
]

const nextAction = () => {
    const moods = store.moods
    store.updateIsSadPage(false)

    if (moods.length === 0) {
        router.push('/moods/wecanhelp')
    } else {
        router.push('/moods/feelings')
    }
}
</script>

<template>
    <div class="main">
        <div class="header-image-wrapper">
            <img src="/heading/sad_image.png" />
        </div>
        <div class="content">
            <h1>We're sorry to hear you're feeling sad today.</h1>
            <p>Can you click on some of the emotions you are feeling?</p>
        </div>
        <ScreeningButtonContainer :options="screeningButtons"></ScreeningButtonContainer>
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
}

.content {
    margin-left: 10px;
    margin-right: 10px;

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
    padding-top: 7rem;
}

.bb-wrapper {
    margin-top: 3.6rem;
}
</style>