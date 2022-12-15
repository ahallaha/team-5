<script setup>
import BottomButton from '../components/BottomButton.vue'
import ScreeningButtonContainer from '../components/ScreeningButtonContainer.vue'
import { useStore } from "../stores/main";
import router from '../router'

const store = useStore()

const screeningButtonContent =
{
    Depressed: [
        { text: "Unsatisfied with your life?", id: "1" },
        { text: "Negative mood most of the time?", id: "2" },
        { text: "Feel your situation is hopeless?",   id: "3" },
    ],
    Lonely: [
        { text: "Feel like your life is empty?", id: "1" },
        { text: "Feel worthless the way things are?", id: "2" },
        { text: "You don’t have anyone to spend time with?", id: "3" },
    ],
    Scared: [
        { text: "Afraid something bad will happen?", id: "1" },
        { text: "Often feel helpless?", id: "2" },
        { text: "Stay at home rather than go out?", id: "3" },
    ],
    Tired: [
        { text: "Hard to sleep?", id: "1" },
        { text: "Hard to get out of bed?", id: "2" },
        { text: "Hard to eat?", id: "3" },
        // { text: "Dropped any of your hobbies or interests?", id: "4" },
    ],
    Frustrated:[
        { text: "Irritated often at people or things?", id: "1" },
        { text: "Most people are better off than you?", id: "2" },
        { text: "Have more problems with memory than most?", id: "3" },
    ],
}
// get the current mood, corresponding button data, and update moods
const moods = store.moods
const mood = moods.pop()
const screeningButtons = screeningButtonContent[mood]

const headingContent = `Can you describe the things that are making you feel ${mood.toLowerCase()}?`
const nextAction = () => {
    const moods = store.moods

    if (moods.length === 0) {
        router.push('/moods/wecanhelp')
    } else {
        router.push({ path: '/moods/feelings' })
    }
}
</script>

<template>
    <div class="main">
        <div class="header-image-wrapper">
            <img src="/heading/sad_image.png" />
        </div>
        <div class="content">
            <h1>{{ headingContent }}</h1>
            <p>Tap on all that apply.</p>
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