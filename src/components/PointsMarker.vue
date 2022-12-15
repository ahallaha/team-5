<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line
const props = defineProps({
    points: Number
})
</script>

<template>
    <span class="main">{{ props.points }} pts</span>
</template>

<style scoped>
.main {
    background-color: #4949C9;
    border-radius: 12px;
    color: white;
    padding: 4px 12px 4px 8px;
    height: 23px;
    font-size: 14px;
}
</style>