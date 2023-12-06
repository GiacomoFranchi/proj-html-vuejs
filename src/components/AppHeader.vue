<script>
import { store } from '../store';
import NavHeader from './NavHeader.vue' ;
import TopHeader from  './TopHeader.vue' ;
import HeroHeader from './HeroHeader.vue' ;

export default {
    data() {
        return {
            store,
        };
    },
    components:{NavHeader, HeroHeader, TopHeader }
}
</script>

<template>
    <section>
        <TopHeader :phone="store.services.phone" :mail="store.services.mail"/>
        <NavHeader />
        <HeroHeader />
    </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

section{
    background-image: url(../assets/Shiny.svg);
    background-size: cover;
}
</style>