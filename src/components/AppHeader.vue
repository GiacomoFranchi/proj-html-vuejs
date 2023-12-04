<script>
import NavHeader from './NavHeader.vue';
import TopHeader from './TopHeader.vue';

export default {
    data() {
        return {};
    },
    components: { TopHeader, NavHeader }
}
</script>

<template>
    <TopHeader />
    <NavHeader />
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

</style>