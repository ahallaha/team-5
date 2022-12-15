<script setup>
import BottomButton from '../components/BottomButton.vue'
import ScreeningButtonContainer from '../components/ScreeningButtonContainer.vue'
import { useStore } from "../stores/main";

const store = useStore()

const screeningButtonContent =
{
    Sad: [
        "Generally unsatisfied with your life?",
        "Negative mood most of the time?",
        "Feel your situation is hopeless?",  
    ],
    Lonely: [
        "Feel like your life is empty?",
        "Feel worthless the way things are?",
        "Feel like you don’t have anyone to spend time with?",
    ],
    Scared: [
        "Afraid something bad will happen?",
        "Often feel helpless?",
        "Prefer to stay at home rather than go out?",
    ],
    Tired: [
        "Hard to sleep?",
        "Hard to get out of bed?",
        "Hard to eat?",
        "Dropped any of your hobbies or interests?",
    ],
    Frustrated:[
        "Get irritated often at people or things?",
        "Think most people are better off than you?",
        "Feel like you have more problems with memory than most?",
    ],
}

// get the current mood, corresponding button data, and update moods
const moods = store.moods
const mood = moods.pop()
const screeningButtons = screeningButtonContent[mood]
// store.updateMoods(moods)

const headingContent = `Can you describe the things that are making you feel this way?`
// const headingContent = `Can you describe the things that are making you feel ${mood.toLowerCase()}?`
const nextAction = () => {
    // retrieve moods
    const moods = store.moods
    // if moods is empty, forward to 'we can help' page
    // else re-render this page
    if (moods.length === 0) {
        window.location.replace('/moods/wecanhelp');
    } else {
        window.location.replace('/moods/feelings');
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
        <BottomButton text="Next"></BottomButton>
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