<script setup>
// eslint-disable-next-line
const goHome = () => {
    window.location.href = '/';
}
</script>

<template>
    <div>
        <button v-on:click="goHome()" class="done-button">Done</button>
    </div>
</template>

<style scoped>
.done-button {
    background-color: #ffffff;
    width: 100%;
    padding: 4px;
    margin-top: 1rem;
    border-radius: 4px;
    color: #4949c9;
    font-size: 19px;
    font-weight: 700;
    border-style: solid;
    border-color: #4949c9;
}
</style>