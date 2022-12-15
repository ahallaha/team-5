<script setup>
import { defineProps, ref } from 'vue'
import { useStore } from "../stores/main";

// eslint-disable-next-line
const props = defineProps({
    task: {
        name: String,
        points: Number,
        icon: String,
        completed: Boolean,
        color: String,
    },
    index: Number
})

const store = useStore()

const completed = ref(props.task.completed)

function check() {
    completed.value = !completed.value
    store.updateTask({ ...props.task, completed: completed.value }, props.index)
}
</script>

<template>
    <div class="card" v-on:click="check">
        <div class="task-icon">
            <img :src="task.icon" style="margin-left:7px;margin-top:7px;" />
        </div>
        <div class="task-text">
            <div class="task-title">
                {{ task.name }}
            </div>
            <div class="points">
                {{ task.points }} points
            </div>
        </div>
        <input class="checkbox" type="checkbox" :checked="completed" :on-click="check" />
    </div>
</template>

<style scoped>
.card {
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    background-color: v-bind(task.color);
    padding: 16px;
}

.task-icon {
    border-radius: 100%;
    background-color: white;
    height: 40px;
    width: 40px;
}

.task-text {
    margin-left: 16px;
}

.task-title {
    font-size: 16px;
}

.points {
    font-size: 12px;
}

.checkbox {
    height: 18px;
    width: 18px;
    margin-left: auto;
}
</style>