<script setup>
import TaskCard from './TaskCard.vue'
import { useStore } from '../stores/main'
import PointsMarker from './PointsMarker.vue'

const store = useStore()
</script>

<template>
    <div class="header-container">
        <h2 class="header">
            Today's tasks
        </h2>
        <PointsMarker :points="10"></PointsMarker>
    </div>
    <span class="task-list">
        <TaskCard v-for="task, index in store.tasks" :task="task" :index="index" :key="task.id"></TaskCard>
    </span>
</template>

<style scoped>
.header {
    font-size: 26px;
    margin-bottom: 22px;
}

.header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
}

.task-list {
    display: flex;
    flex-direction: column;
    gap: 19px;
}
</style>