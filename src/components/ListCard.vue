<script>
    export default{
        props:{
        icon:String,
        title:String,
        parag: String,
        }
    }
</script>

<template>
    <div class="card">
        <div>
            <i :class="icon"></i>
            <h3>{{ title }}</h3>
        </div>
        <p>{{ parag }}</p>

    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;


</style>
