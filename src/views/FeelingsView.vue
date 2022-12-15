<script setup>
import { ref } from 'vue'
import BottomButton from '../components/BottomButton.vue'
import { useStore } from "../stores/main";
import router from '../router'
import FeelingsInteraction from '../components/FeelingsInteraction.vue';

const store = useStore()
store.updateIsSadPage(false)

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
        { text: "No one to spend time with?", id: "3" },
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
        { text: "More memory problems than most?", id: "3" },
    ],
}
// get the current mood, corresponding button data, and update moods
const moods = store.moods
let mood = moods.pop()
let screeningButtons = screeningButtonContent[mood]
const keyValue = ref(0);

let headingContent = `Can you describe the things that are making you feel ${mood.toLowerCase()}?`
const nextAction = () => {
    const moods = store.moods

    if (moods.length === 0) {
        router.push('/moods/wecanhelp')
    } else {
        mood = moods.pop()
        screeningButtons = screeningButtonContent[mood]
        headingContent = `Can you describe the things that are making you feel ${mood.toLowerCase()}?`
        keyValue.value ++
    }
}
</script>

<template>
    <div class="main">
        <div class="header-image-wrapper">
            <img src="/heading/sad_image.png" />
        </div>
        <FeelingsInteraction :headingContent="headingContent" :screeningButtons="screeningButtons" :key="keyValue"></FeelingsInteraction>
        <BottomButton @bottom-button-clicked="nextAction" text="Next"></BottomButton>
    </div>
</template>

<style scoped>
.main {
    padding: 1rem;
    background-color: #e7fbff;
    height: 100vh;
}

.header-image-wrapper {
    text-align: center;
    padding-top: 7rem;
}
</style>