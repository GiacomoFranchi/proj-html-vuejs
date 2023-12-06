<script>
import TopFooter from './TopFooter.vue';


export default {
    data() {
        return {};
    },
    components:{ TopFooter }
}
</script>

<template>
    <TopFooter />
    <footer>
        <section>
            <p>Enjoy the low price. We are tracking any intention of piracy.</p>
            <p>&copy; 2020 NEXGEN in Proudly Powered by <span style="color:rgb(5, 130, 131);">Codings</span>.</p>
        </section>
        <a :href="`#hero`"><i class="fa-solid fa-arrow-up"></i></a>
    </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

footer{
    background-color:$bg-color-footer;
    color: white;
    font-size: 1.2rem;
    padding: 1.5rem;
    position: relative;
    section{
        width: 80%;
        margin: 0 auto;
        @include flex(space-between, center, row);
    }
    i{
        position: absolute;
        color: black;
        top: 50%;
        transform: translateY(-50%);
        right: 1%;
        padding: 1rem;
        background-color: rgba($color: #ffffff, $alpha: 0.1);
        border-radius: 50%;
        &:hover {
        color:$color-green;
        border-radius: 50%;
        background-color:rgba(5, 130, 131, 0.6);
        }
    }
}
</style>
