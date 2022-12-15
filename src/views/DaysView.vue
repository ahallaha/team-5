<script setup>
import TopBar from '../components/TopBar.vue'
import RewardCard from '../components/my_days_cards/RewardCard.vue'
import MoodCalendarCard from '../components/my_days_cards/MoodCalendarCard.vue'
import MoodOverviewCard from '../components/my_days_cards/MoodOverviewCard.vue'
import MedicationsCard from '../components/my_days_cards/MedicationsCard.vue'
import FeelingsCard from '../components/my_days_cards/FeelingsCard.vue'
</script>

<template>
    <div class="main">
        <TopBar></TopBar>
        <h1 class="title">My days</h1>
        <h2 class="section-title">Rewards</h2>
        <RewardCard class="day-card"></RewardCard>
        <h2 class="section-title">Mood</h2>
        <MoodCalendarCard class="day-card"></MoodCalendarCard>
        <MoodOverviewCard class="day-card"></MoodOverviewCard>
        <h2 class="section-title">Medications</h2>
        <MedicationsCard class="day-card"></MedicationsCard>
        <h2 class="section-title">Share</h2>
        <FeelingsCard class="day-card"></FeelingsCard>
    </div>
</template>

<style scoped>
.main {
    margin-left: 25px;
    margin-right: 25px;
}

.title {
    margin-top: 44px;
}

.section-title {
    margin-top: 8px;
    margin-bottom: 8px;
}

.day-card {
    margin-bottom: 16px;
    border-radius: 20px;
    padding: 13px 17px 17px 25px;
    border: 1px solid #EDE6FC;
}

.day-card>>>h2 {
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 25px;
}

.day-card>>>a {
    font-weight: 700;
    font-size: 20px;
}
</style>