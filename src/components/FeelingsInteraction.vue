<script setup>
import { defineProps } from 'vue'
import ScreeningButtonContainer from '../components/ScreeningButtonContainer.vue'

// eslint-disable-next-line
const props = defineProps({
    headingContent: String,
    screeningButtons: Array
})
</script>

<template>
  <div class="content">
    <h1>{{ headingContent }}</h1>
    <p>Tap on all that apply.</p>
  </div>
  <ScreeningButtonContainer :options="screeningButtons"></ScreeningButtonContainer>
</template>

<style scoped>
.content {
    margin-left: 25px;
    margin-right: 25px;

}

p {
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    font-family: Alegreya;
    margin: 2rem 0;
}
</style>