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
    <section class="serv">
        <h5>OUR BUSINESS AREAS</h5>
        <h2>Excellence in <span>Services</span></h2>
        <div>
            <p>We are leaders in providing consultancy with a set of cutting-edge thecnologies and a team of experienced and renowned professionals. These are some options that you can hire.</p>
            <button class="see-all">SEE ALL</button>
        </div>
        <div class="row">
            <div class="col" v-for=" service in store.services">
                <ListCard :icon="service.icon" :title="service.title" :parag="service.parag"/>
                <i class="i-x fa-solid fa-arrow-right"></i>
            </div>
        </div>
    </section>

</template>

<style lang="scss" >
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.serv{
    width: 80%;
    margin: 0 auto;
    padding: 100px 0;
    margin-bottom: 3rem;
    h5{
        @include sub-title;
    }
    h2{
        @include title;
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
        .see-all{
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
            position: relative;
            .i-x{
                position: absolute;
                right: 2rem;
                top: 2rem;
                font-size: 1.5rem;
                color:rgba(5, 130, 131, 0.6);
                height: 45px;
                line-height: 45px;
                padding: 0 0.7rem;
                &:hover {
                    color:rgb(5, 130, 131);
                    border-radius: 50%;
                    background-color:rgba(5, 130, 131, 0.6);
    }
            }
            .card{
                width: 100%;
                @include flex(space-between, flex-start, column);
                padding: 2rem;
                div{
                    flex-direction: column;
                    i{
                    color:rgb(5, 130, 131);
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }
                h3{
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                }
                }

                p{
                    color: grey;
                }
                
            }
        }
    }
}

</style>