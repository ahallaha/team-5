<script setup>
import { ref } from 'vue'
const selected = ref("tasks")

function select(event) {
    console.log(event.target)
    selected.value = event.target.id
}

function isSelected(name) {
    console.log(selected.value === name)
    return selected.value === name
}
</script>

<template>
    <div class="tab-bar">
        <button id="tasks" :class="{
            selected: isSelected('tasks')
        }" v-on:click="select">
            <img src="/navbar/tasks.svg" />
            <br />
            Tasks
        </button>
        <button id="days" :class="{
            selected: isSelected('days')
        }" v-on:click="select">
            <img src="/navbar/days.svg" />
            <br />
            My days
        </button>
        <button id="explore" :class="{
            selected: isSelected('explore')
        }" v-on:click="select">
            <img src="/navbar/explore.svg" />
            <br />
            Explore
        </button>
    </div>
</template>

<style scoped>
.tab-bar {
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    height: 100%;
}

button {
    flex-shrink: 0.5;
    flex-grow: 1;
    background: #FFFFFF;
    color: black;
    border: none;
    height: 100%;
    color: #707073;
    font-size: 12px;
    text-align: center;
}

button>img {
    filter: brightness(0) saturate(100%) invert(48%) sepia(0%) saturate(1610%) hue-rotate(52deg) brightness(88%) contrast(75%);
}

button.selected {
    color: #4949C9;
}

button.selected>img {
    filter: brightness(0) saturate(100%) invert(26%) sepia(24%) saturate(6206%) hue-rotate(227deg) brightness(95%) contrast(82%);
}
</style>