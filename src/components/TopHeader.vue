<script>
export default {
  data() {
    return {
        links:[
            {id:"+1(305)1234-5678" , class:"fa-solid fa-phone"},
            {id:"hello@example.com" , class:"fa-solid fa-envelope"},
            {id:"" , class:"fa-brands fa-facebook-f"},
            {id:"" , class:"fa-brands fa-x-twitter"},
            {id:"" , class:"fa-brands fa-linkedin"},
            ]
        }
    }
}
</script>

<template>
    <header>
        <section>
            <!--Apertura:-->
            <span class="links">
                <i class="fa-solid fa-clock"></i>
                <span>
                    Open Hours: Mon-Sat-9:00-18:00 
                </span>
            </span>
            <!--Lista link contatti-->
            <ul>
                <li v-for="link in links">
                    <a href="">
                        <i :class="link.class"></i>
                        {{ link.id }}
                    </a>
                </li>
            </ul>
        </section>
    </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

header{
    width: 100%;
    background-color: $bg-color-HTop;
    section{
        width:80%;
        margin: 0 auto;
        padding: 2px 0;
        color: white;
        @include flex(space-between, center, row);
        ul{
            @include flex(space-between, center, row);
            list-style: none;
            li{
                margin: 10px;
                font-size: 0.8rem;
                a{
                    color: white;
                    text-decoration: none;
                }
            }
        }
    } 
}
</style>