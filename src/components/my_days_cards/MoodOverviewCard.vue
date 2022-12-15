<template>
    <div class="card">
        <h2>You noted some sad feelings this week.</h2>
        It doesn't feel good to have these distresseing emotions. Sharing your feelings with someone can help you feel
        better.
        <ul>
            <li><span class="li-title">Lonely</span> - Several days</li>
            <li><span class="li-title">Scared</span> - Nearly everyday</li>
            <li><span class="li-title">Frustrated</span> - Several days</li>
        </ul>
        <router-link to="/gethelp">Find someone to talk to</router-link>
    </div>
</template>

<style scoped>
.card {
    background-color: #E6FBFF;
}

a {
    color: #4949C9;
    font-weight: 700;
    text-decoration-line: none;
}

ul {
    list-style-type: none;
    padding-left: 0px;
}

.li-title {
    font-weight: 700;
}
</style>