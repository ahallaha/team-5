<script setup>
import { defineProps } from 'vue'
// eslint-disable-next-line
const props = defineProps({
    text: String
})
</script>

<template>
    <div>
        <button class="big-button">{{ text }}</button>
    </div>
</template>

<style scoped>
.big-button {
    background-color: #4949c9;
    width: 100%;
    padding: 4px;
    border-radius: 4px;
    color: white;
    font-size: 19px;
    border-style: solid;
    border-color: #4949c9;
}
</style>