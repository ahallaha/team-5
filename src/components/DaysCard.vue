<script setup>
import { defineProps } from 'vue'
// eslint-disable-next-line
const props = defineProps({
    bgColor: String,
    linkColor: String,
    title: String
}
</script>

<template>
    <div class="main">
        <h2 class="title">{{ props.title }}</h2>
    </div>
</template>

<style scoped>
.main {
    border-radius: 8px;
    background-color: v-bind(bgColor);
}
</style>