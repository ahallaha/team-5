<script setup>
import { defineProps, toRefs } from 'vue'
import { useStore } from "../stores/main";

const store = useStore()

const props = defineProps({
    text: String,
    id: String,
})

const toggleSelect = () => {
    const { id } = toRefs(props);
    const element = document.getElementById(id.value)
    element.classList.toggle("selected")

    if (store.isSadPage) {
        const mood = element.textContent
        const { moods } = store
        if (moods.includes(mood)) {
            moods.splice(moods.indexOf(mood), 1)
            store.updateMoods(moods)
        } else {
            store.updateMoods([mood, ...moods])
        }
    }
}
</script>

<template>
    <button :id="id" v-on:click="toggleSelect(this)" class="screener" style="`background-color: ${backgroundColor}`">{{ text }}</button>
</template>

<style scoped>
.screener {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    color: #4949c9;
    background-color:#e7fbff;
    border-style: solid;
    border-color: #4949c9;
    padding: 4px 10px;
    margin: 0 .5rem;
    border-radius: 50px;
    height: 30px;
}
.screener.selected {
    color: #e7fbff;
    background-color: #4949c9;
    border-color: #4949c9;
}
</style>