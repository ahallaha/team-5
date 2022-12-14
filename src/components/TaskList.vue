<script setup>
import TaskCard from './TaskCard.vue'

const tasks = [
    {
        name: 'Breathing exercises',
        points: 10,
        icon: './tasks/Relax.png',
        completed: true,
        color: '#E6FBFF'
    },
    {
        name: 'Take medications',
        points: 10,
        icon: '',
        completed: false,
        color: '#FBE2CC'
    },
    {
        name: 'Get active',
        points: 10,
        icon: '',
        completed: false,
        color: '#FBDFED'
    }
]
</script>

<template>
    <h2 class="header">
        Today's tasks
    </h2>
    <span class="task-list">
        <TaskCard v-for="task in tasks" :task="task" :key="task.name"></TaskCard>
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