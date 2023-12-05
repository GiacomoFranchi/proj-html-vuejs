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
        <i :class="icon"></i>
        <h3>{{ title }}</h3>
        <p>{{ parag }}</p>
        <button><i class="fa-solid fa-arrow-right"></i></button>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.card{
    width: 100%;
    @include flex(space-between, flex-start, column);
    padding: 2rem;
    position: relative;
    i{
        color:rgb(5, 130, 131);
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    h3{
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }
    p{
        color: grey;
    }
    button{
        position: absolute;
        right: 2rem;
        display: inline-block;
        border: none;
        background-color: white;
        i{
            font-size: 1.5rem;
            color:rgba(5, 130, 131, 0.6);
            height: 30px;
            line-height: 45px;
            padding: 0 0.7rem;
        }
        &:hover {
            color:rgb(5, 130, 131);
            border-radius: 50%;
            background-color:rgba(5, 130, 131, 0.6);
        }
    }
}
</style>