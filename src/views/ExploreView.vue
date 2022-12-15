<script setup>
import ExploreCard from '../components/ExploreCard.vue'

const choices = [
    {
        title: 'Fun and games',
        color: '#F09E54',
        icon: '/explore/'
    },
    {
        title: 'Calming activities',
        color: '#EF5DA8',
        icon: '/explore/'
    },
    {
        title: 'Physical activities',
        color: '#7D54F0',
        icon: '/explore/'
    },
    {
        title: 'Reflection and journaling',
        color: '#65D2D0',
        icon: '/explore/'
    },
    {
        title: 'Social',
        color: '#EF5DA8',
        icon: '/explore/'
    },
    {
        title: 'Articles',
        color: '#F09E54',
        icon: '/explore/'
    }
]
</script>

<template>
    <div class="main">
        <h1>Explore</h1>
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

.main {
    margin-left: 25px;
    margin-right: 25px;
}
</style>