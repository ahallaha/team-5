<script setup>
import NextButton from '../components/NextButton.vue'
</script>

<template>
    <div class="main">
        <div class="content">
            <h1>We're sorry to hear you're feeling sad today.</h1>
            <p>can you click on some of the emotions you are feeling?</p>
        </div>
        <!-- button class="next-button">Next</button -->
        <NextButton></NextButton>
    </div>
</template>

<style scoped>
.next-button {
    background-color: #4949c9;
    width: 100%;
    /* margin: auto; */
    color: white;
    font-size: 16px;
    padding: .25rem;
    align-self: stretch;
}

.main {
    padding: 1rem;
    background-color: #e7fbff;
    height: 100vh;
}

.content {
    margin-left: 25px;
    margin-right: 25px;

}
</style>