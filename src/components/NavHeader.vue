<script>
export default {
  data() {
    return {}
  }
}
</script>

<template>
    <header>
        <section class="logo">
            <img src="../assets/img/logo.PNG" alt="Logo NexGen">
        </section>
        <section>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">SERVICES</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">PROJECTS</a></li>
                <li><a href="">RESULTS</a></li>
                <li>
                    <button id="btn-touch">GET IN TOUCH</button>
                </li>
            </ul>
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
    ul{
            @include flex(space-between, center, row);
            list-style: none;
            li{
                margin: 10px;
                a{
                    text-decoration: none;
                    color: black;
                }
                button{
                    @include btn-touch;
                }
            }
        }
}
</style>