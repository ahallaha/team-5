<script setup>
import MoodCard from './MoodCard.vue'

const moods = [
    {
        name: 'Happy',
        color: '#F09E54',
        href: '/moods/happy',
        icon: './moods/happy_icon.svg'
    },
    {
        name: 'Mostly happy',
        color: '#EF5DA8',
        href: '/moods/happy',
        icon: './moods/mostly_happy_icon.svg'
    },
    {
        name: 'A little sad',
        color: '#7D54F0',
        href: '/moods/sad',
        icon: './moods/little_sad_icon.svg'
    },
    {
        name: 'Sad',
        color: '#65D2D0',
        href: '/moods/sad',
        icon: './moods/sad_icon.svg'
    }
]
</script>

<template>
    <h2 class="header">
        How are you feeling today?
    </h2>
    <span class="mood-list">
        <MoodCard v-for="mood in moods" :mood="mood" :key="mood.name"></MoodCard>
    </span>
</template>

<style scoped>
body {
    margin: 0;
}

.header {
    font-size: 22px;
    margin-bottom: 23px;
}

.mood-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 62px;
}
</style>