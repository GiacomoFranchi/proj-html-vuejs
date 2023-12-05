<script>
import { store } from '../store';

    export default{
    data() {
        return {
            store:store,
        };
    },
    methods:{
        getImgUrl(img){
        return new URL(`../assets/img/${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section class="results">
        <h5>WHAT ARE WE DOING</h5>
        <h2><span>Results</span> in Numbers</h2>
        <div>
            <section v-for="number in store.numbers">
                <h3>{{ number.number }}</h3>
                <h4>{{ number.title }}</h4>
            </section>
        </div>
    </section>
    <div class="partner">
        <ul>
            <li v-for="partner in store.partners">
                <img :src="getImgUrl(partner)" alt="Logo Partner">
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.results{
    width: 100%;
    background-image: url(../assets/img/bg-7.jpg);
    background-position:center ;
    background-size: cover;
    padding: 100px 0;
    h5{
        @include sub-title;
        text-align: center;
    }
    h2{
        @include title;
        text-align: center;
        color: white;
        margin-bottom: 3rem;
        span{
            @include title-green;
            color: white;
        }
    }
    div{
        width: 80%;
        margin: 0 auto;
        @include flex(space-between, center, row);
        section{
            width: 100%;
            @include flex(space-evenly, center, column);
            h3{
                margin-bottom: 1rem;
                font-size: 2.5rem;
                color:rgb(5, 130, 131);
            }
            h4{
                color: white;
                font-weight: bold;
                font-size: 1.5rem;
            }
        }
    }
}
.partner{
        width: 100%;
        padding: 50px 0;
        background-color: rgb(17, 17, 23);
        ul{
            width: 80%;
            margin: 0 auto;
            list-style: none;
            @include flex(space-between, center, row);
        li{
            width: calc(100% / 6 - 5rem);
            img{
                width: 100%;
                filter: brightness(4);
            }
        }
        }
    }
</style>