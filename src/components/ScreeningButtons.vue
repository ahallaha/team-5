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
.screeners {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 14px;
    height: 150px;
}

.screener {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    color: #4949c9;
    background-color: #e7fbff;
    border-style: solid;
    border-color: #4949c9;
    padding: 4px 14px;
    border-radius: 50px;
    max-height: 47px;
}
</style>