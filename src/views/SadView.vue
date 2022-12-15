<script setup>
import BottomButton from '../components/BottomButton.vue'
import ScreeningButtonContainer from '../components/ScreeningButtonContainer.vue'
import { useStore } from "../stores/main";
// import { useRouter } from 'vue-router'
import router from '../router'

const store = useStore()

// const router = useRouter()

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

    if (moods.length === 0) {
        router.push('/moods/wecanhelp')
        // window.location.replace('/moods/wecanhelp')
    } else {
        router.push({ path: '/moods/feelings' })
        // window.location.href = '/moods/feelings'
    }
}

const logThis = () => {
    console.log('logThis was triggered')
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
    line-height: 30px;
    font-family: Alegreya;
    margin: 2rem 0;
}

.header-image {
    width: 191px;
    height: 162px;
    left: 87px;
    top: 113px;
}

.header-image-wrapper {
    text-align: center;
    padding-top: 7rem;
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