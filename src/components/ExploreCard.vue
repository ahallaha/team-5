<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    item: {
        title: String,
        color: String,
        icon: String
    }
})
</script>

<template>
    <div class="container">
        <div class="card">
            <img :src="props.item.icon" />
        </div>
        {{ props.item.title }}
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
}

.card {
    height: 146px;
    width: 146px;
    border-radius: 20px;
    background-color: v-bind(item.color);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>