<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const selected = ref(route.name)

function select(event) {
    selected.value = event.target.id
}

function isSelected(name) {
    return selected.value === name
}

onMounted(async () => {
    await router.isReady()
    if (route.name === 'gethelp') {
        selected.value = 'days'
    } else {
        selected.value = route.name
    }
})
</script>

<template>
    <div class="tab-bar">
        <router-link to="/" class="link">
            <button id="tasks" :class="{ selected: isSelected('tasks') }" v-on:click="select">
                <img src="/navbar/tasks.svg" />
                <br />
                Tasks
            </button>
        </router-link>
        <router-link to="/days" class="link">
            <button id="days" :class="{ selected: isSelected('days') }" v-on:click="select">
                <img src="/navbar/days.svg" />
                <br />
                My days
            </button>
        </router-link>
        <router-link to="/explore" class="link">
            <button id="explore" :class="{ selected: isSelected('explore') }" v-on:click="select">
                <img src="/navbar/explore.svg" />
                <br />
                Explore
            </button>
        </router-link>
    </div>
</template>

<style scoped>
.tab-bar {
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    height: 100%;
}

.link {
    flex-grow: 1;
    text-align: center;
}

button {
    /* flex-shrink: 0.5; */
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