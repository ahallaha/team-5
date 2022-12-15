<template>
    <div class="card">
        <div class="text-content">
            <h2>You earned 20 points this week!</h2>
            <a>Shop the mall</a>
        </div>
        <img src="/days/reward.png" class="reward-img">
    </div>
</template>

<style scoped>
.card {
    background-color: #DCDCFF;
    display: flex;
    flex-direction: row;
}

.text-content {
    display: flex;
    flex-direction: column;
}

a {
    color: #4949C9;
}

.reward-img {
    align-self: center;
}
</style>