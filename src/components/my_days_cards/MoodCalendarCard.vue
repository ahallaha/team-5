<script setup>
const days = [
    {
        name: 'M',
        icon: '/days/sad.png'
    },
    {
        name: 'T',
        icon: '/days/little-sad.png'
    },
    {
        name: 'W',
        icon: '/days/mostly-happy.png'
    },
    {
        name: 'T',
        icon: '/days/little-sad.png'
    },
    {
        name: 'F',
        icon: '/days/little-sad.png'
    },
    {
        name: 'S',
        icon: '/days/mostly-happy.png'
    },
    {
        name: 'S',
        icon: '/days/sad.png'
    }
]
</script>

<template>
    <div class="card">
        <h2>Your mood</h2>
        <div class="calendar">
            <div v-for="(day, index) in days" :key="index" class="cell">
                <img :src="day.icon" />
                {{ day.name }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: #E6FBFF;
}

.calendar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.cell {
    font-weight: 700;
    font-size: 12px;
    text-align: center;
}
</style>