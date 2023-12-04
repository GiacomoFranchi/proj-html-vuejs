<script>
export default {
  data() {
    return {
        links:[
            {id:"HOME"},
            {id:"SERVICES"},
            {id:"ABOUT"},
            {id:"PROJECTS"},
            {id:"RESULTS"},
    ]
    }
  }
}
</script>

<template>
    <header>
        <section class="logo">
            <img src="../assets/img/logo.PNG" alt="Logo NexGen">
        </section>
        <section class="col-dx">
            <ul>
                <li v-for="link in links"><a href="">{{link.id}}</a></li>
            </ul>
            <button id="btn-touch">GET IN TOUCH</button>
        </section>
    </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

header{
    width: 80%;
    margin: 0 auto;
    margin-top: 1.2rem;
    font-size: 1.3rem;
    @include flex(space-between, center, row);
    .logo{
        width: 180px;
        img{
            width: 100%;
        }
    }
    .col-dx{
        gap: 1rem;
        @include flex(space-between, center, row);
        ul{
            @include flex(space-between, center, row);
            list-style: none;
            li{
                margin: 8px;
                a{
                    text-decoration: none;
                    color: black;
                }
            }
        }
        button{
            @include btn-touch;
        }
    }
}
</style>