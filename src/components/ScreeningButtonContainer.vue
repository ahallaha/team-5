<script setup>
import { defineProps } from 'vue'
import ScreeningButton from './ScreeningButton.vue'
// eslint-disable-next-line
const props = defineProps(["options"])
</script>

<template>
    <div class="screeners">
        <ScreeningButton v-for="config in options" class="screener-wrapper"
            :backgroundColor="config.backgroundColor"
            :text="config.text"
            :key="config.text"
            :id="`screening-button-${config.id}`"></ScreeningButton>
    </div>
</template>

<style scoped>
.screeners {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;
    height: 127px;
}
</style>