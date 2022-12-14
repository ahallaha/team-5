<script setup>
import MoodList from '../components/MoodList.vue'
import TaskList from '../components/TaskList.vue'
</script>

<template>
    <div class="main">
        <h1 class="title">Welcome back, Sarina!</h1>
        <MoodList></MoodList>
        <TaskList></TaskList>
    </div>
</template>

<style scoped>
.main {
    margin-left: 25px;
    margin-right: 25px;
}

.title {
    margin-top: 109px;
}
</style>