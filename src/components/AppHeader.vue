<script>
import NavHeader from './NavHeader.vue';
import TopHeader from './TopHeader.vue';
import HeroHeader from './HeroHeader.vue';

export default {
    data() {
        return {};
    },
    components: { TopHeader, NavHeader, HeroHeader }
}
</script>

<template>
    <TopHeader />
    <NavHeader />
    <HeroHeader />
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

</style>