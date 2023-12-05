<script>
import { store } from '../store';
import ListCard from './ListCard.vue';

    export default{
    data() {
        return {
            store:store,
        };
    },
    components: { ListCard }
}
</script>

<template>
    <section>
        <h5>OUR BUSINESS AREAS</h5>
        <h2>Excellence in <span>Services</span></h2>
        <div>
            <p>We are leaders in providing consultancy with a set of cutting-edge thecnologies and a team of experienced and renowned professionals. These are some options that you can hire.</p>
            <button>SEE ALL</button>
        </div>
        <div class="row">
            <div class="col" v-for=" service in store.services">
                <ListCard :icon="service.icon" :title="service.title" :parag="service.parag"/>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

section{
    width: 80%;
    margin: 0 auto;
    padding: 100px 0;
    margin-bottom: 3rem;
    h5{
        color: rgb(0, 166, 166);
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }
    h2{
        font-size: 3rem;
        font-weight: bold;
        color: rgb(33, 51, 62);
        margin-bottom: 1.5rem;
        span{
            @include title-green;
        }
    }
    div{
        @include flex(space-between, flex-start, row);
        p{
            font-size: 1.5rem;
            text-align: left;
            color: gray;
            margin-bottom: 1.5rem;
            width: 85%;
        }
        button{
            @include btn-touch;
        }
    }
    .row{
        width: 100%;
        @include flex(space-between, flex-start, row);
        flex-wrap: wrap;
        .col{
            width: calc(100% / 3 - 2rem);
            margin: 1rem;
            background-color: white;
            border-radius: 5px;
        }
    }
}

</style>