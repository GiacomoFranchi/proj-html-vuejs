<script>
export default {
  data() {
    return {}
  }
}
</script>

<template>
    <header>
        <section>
            <span class="links">
                <i class="fa-solid fa-clock"></i>
                <span>
                    Open Hours: Mon-Sat-9:00-18:00 
                </span>
            </span>
            <ul>
                <li><a href="">
                    <i class="fa-solid fa-phone"></i>
                    +1(305)1234-5678
                </a></li>
                <li><a href="">
                    <i class="fa-solid fa-envelope"></i>
                    hello@example.com
                </a></li>
                <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href=""><i class="fa-brands fa-x-twitter"></i></a></li>
                <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
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