<script setup>
import TaskCard from './TaskCard.vue'
import { useStore } from "../stores/main";

const store = useStore()
</script>

<template>
    <h2 class="header">
        Today's tasks
    </h2>
    <span class="task-list">
        <TaskCard v-for="task, index in store.tasks" :task="task" :index="index" :key="task.id"></TaskCard>
    </span>
</template>

<style scoped>
.header {
    font-size: 26px;
    margin-bottom: 22px;
}

.task-list {
    display: flex;
    flex-direction: column;
    gap: 19px;
}
</style>