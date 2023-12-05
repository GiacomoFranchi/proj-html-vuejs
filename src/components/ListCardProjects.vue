<script>
    export default{
        props:{
        img:String,
        title:String,
        parag: String,
        },
        methods:{
    getImgUrl(img){
        return new URL(`../assets/img/${img}`, import.meta.url).href;
    }
  }
    }
</script>

<template>
    <div class="card-Pr">
        <img :src="getImgUrl(img)" alt="">
        <div class="visibl-title">
            <h2 class="title">{{ title }}</h2>
            <p>{{ parag }}</p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.card-Pr{
    width: 100%;
    padding: 0;
    height: 100%;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
    .visibl-title{
        border-radius: 15px;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        .title{
            position: absolute;
            font-size: 1.5rem;
            color: white;
            font-weight: bold;
            top:65%;
            left: 50%;
            transform: translateX(-50%);
        }
        p{
            display: none;
        }
    }
    &:hover p{
        position: absolute;
        display: block;
        color: white;
        top:70%;
        font-size: 1rem;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
    }
    &:hover .title{
        top:45%;
        font-size: 1.2rem;

    }
    &:hover .visibl-title{
        background-color:rgba(0, 0, 0, 0.7);
    }
}
</style>