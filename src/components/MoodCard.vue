<script setup>
import { defineProps } from 'vue'
// eslint-disable-next-line
const props = defineProps({
    mood: {
        name: String,
        color: String,
        icon: String
    }
})
</script>

<template>
    <div class="main">
        <a class="card" :href="mood.href">
            <img :src="mood.icon" />
        </a>
        <div class="mood-name">
            {{ mood.name }}
        </div>
    </div>
</template>

<style scoped>
.main {
    width: 70px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: center;
}

.card {
    height: 73px;
    border-radius: 20px;
    background-color: v-bind(mood.color);
}

.mood-name {
    font-size: 15px;
}
</style>