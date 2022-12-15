<script setup>
import TopBar from '../components/TopBar.vue'
import ExploreCard from '../components/ExploreCard.vue'

const choices = [
    {
        title: 'Fun and games',
        color: '#F09E54',
        icon: '/explore/games.png'
    },
    {
        title: 'Calming activities',
        color: '#EF5DA8',
        icon: '/explore/calming.png'
    },
    {
        title: 'Physical activities',
        color: '#7D54F0',
        icon: '/explore/physical.png'
    },
    {
        title: 'Reflection and journaling',
        color: '#65D2D0',
        icon: '/explore/journal.png'
    },
    {
        title: 'Social',
        color: '#EF5DA8',
        icon: '/explore/social.png'
    },
    {
        title: 'Articles',
        color: '#F09E54',
        icon: '/explore/articles.png'
    }
]
</script>

<template>
    <div class="main">
        <TopBar></TopBar>
        <h1 class="title">Explore</h1>
        <div class="cards-container">
            <ExploreCard v-for="choice in choices" :key="choice.title" :item="choice" class="explore-card">
            </ExploreCard>
        </div>
    </div>
</template>

<style scoped>
.cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 24px;
}

.title {
    margin-top: 44px;
}

.main {
    margin-left: 25px;
    margin-right: 25px;
}
</style>