<script setup>
import TopBar from '../components/TopBar.vue'
import FriendshipCard from '../components/get_help_cards/FriendshipCard.vue'
import TalkCard from '../components/get_help_cards/TalkCard.vue'
import CommunityCard from '../components/get_help_cards/CommunityCard.vue'
import EmergencyCard from '../components/get_help_cards/EmergencyCard.vue'
</script>

<template>
    <div class="main">
        <TopBar></TopBar>
        <h1 class="title">Get Help</h1>
        <TalkCard class="help-card"></TalkCard>
        <FriendshipCard class="help-card"></FriendshipCard>
        <CommunityCard class="help-card"></CommunityCard>
        <EmergencyCard class="help-card"></EmergencyCard>
    </div>
</template>

<style scoped>
.main {
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 75px;
}

.title {
    margin-top: 44px;
}

.section-title {
    margin-top: 8px;
    margin-bottom: 8px;
}

.help-card {
    margin-bottom: 16px;
    border-radius: 20px;
    padding: 13px 17px 17px 25px;
    border: 1px solid #EDE6FC;
}

.help-card:deep(h2) {
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 25px;
}

.help-card:deep(a) {
    font-weight: 700;
    font-size: 20px;
}
</style>