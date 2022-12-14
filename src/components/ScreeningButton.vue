<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
    text: String,
    id: String
})

const toggleSelect = () => {
    const { id } = toRefs(props);
    const element = document.getElementById(id.value)
    element.classList.toggle("selected")
//     completed.value = !completed.value
//     store.updateTask({ ...props.task, completed: completed.value })
}
</script>

<template>
    <button :id="id" v-on:click="toggleSelect(this)" class="screener" style="`background-color: ${backgroundColor}`">{{ text }}</button>
</template>

<style scoped>
.screener {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    color: #4949c9;
    background-color:#e7fbff;
    border-style: solid;
    border-color: #4949c9;
    padding: 4px 14px;
    border-radius: 50px;
    max-height: 47px;
}
.screener.selected {
    background-color: #07e0e0;
}
</style>