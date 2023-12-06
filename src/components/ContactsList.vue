<script>
    export default{
        props:{
            phone: String,
            mail: String,
            adress: String
        }
    }
</script>

<template>
<li><a href=""><i class="fa-solid fa-phone"></i>{{ phone }}</a></li>
<li><a href=""><i class="fa-solid fa-envelope"></i>{{ mail }}</a></li>
<li><a href=""><i class="fa-solid fa-location-dot"></i>{{ adress }}</a></li>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;
li{
    margin-bottom: 1rem;
    a{
        text-decoration: none;
        color: rgb(5, 130, 131);
        font-size: 1.8rem;
        i{
            margin-right: 0.8rem;
        }
    }
}
</style>
