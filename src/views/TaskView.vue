<script setup>
import MoodList from '../components/MoodList.vue'
import TaskList from '../components/TaskList.vue'
import TopBar from '../components/TopBar.vue'
</script>

<template>
    <div class="main">
        <TopBar></TopBar>
        <h1 class="title">Welcome back, Sarina!</h1>
        <MoodList></MoodList>
        <TaskList></TaskList>
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
</style>