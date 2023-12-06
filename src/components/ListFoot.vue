<script>
    export default{
        props:{
        id:String,
        listOpt:String,
        }
    }
</script>

<template>
    <div class="card">
        <h2>{{ id }}</h2>
        <ul>
            <li v-for="opt in listOpt">
                <a href="">
                    <i class="fa-solid fa-chevron-right"></i> {{ opt }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.card{
    background-color:rgb(25, 25, 31) ;
    padding: 2rem;
    border-radius: 10px;
    h2{
        color: white;
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    ul{
        list-style: none;
        li{
            margin-bottom: 0.8rem;
            a{
                color: white;
                text-decoration: none;
                font-size: 1.2rem;
            }
        }
    }
}
</style>