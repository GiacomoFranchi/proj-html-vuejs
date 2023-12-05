<script>
import CompanyMain from './CompanyMain.vue';
import ServicesMain from './ServicesMain.vue';
export default {
    data() {
        return {};
    },
    components:{ ServicesMain, CompanyMain }
}
</script>

<template>
    <main>
        <ServicesMain />
        <CompanyMain />
    </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

main{
    width: 100%;
    background-color: #eef1ed ;
    position: relative;
}
</style>