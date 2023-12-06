<script>
import { store } from '../store';
import ListFoot from './ListFoot.vue';
import ContactsList from './ContactsList.vue';
    export default{
    data() {
        return {
            store:store,
        };
    },
    components: { ListFoot, ContactsList }
}
</script>

<template>
    <div class="top-footer">
        <section>
            <h2><span>NEXT</span>GEN</h2>
            <p>A Functional HTML template for Corporate & Business.</p>
            <ul>
                <ContactsList :phone="store.contacts.phone" :mail="store.contacts.mail" :adress="store.contacts.adress"/>
            </ul>
            <button>GET IN TOUCH</button>
        </section>
        <div class="row">
            <div class="col" v-for="link in store.links">
                <ListFoot :id="link.id" :listOpt="link.listOpt"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" >
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.top-footer{
    width: 100%;
    padding: 100px 10%;
    background-color:rgb(17, 17, 23) ;
    @include flex(space-between, stretch, row);
    section{
        width: 25%;
        padding: 1rem;
        h2{
            @include title;
            color: white;
            font-size: 2rem;
            span{
                @include title-green;
                border-radius: 30px 0 0 30px;
                padding: 0.5rem 0.2rem 0.5rem 2rem;
            }
        }
        p{
            font-size: 1.2rem;
            color: white;
        }
        ul{
            color: white;
            list-style: none;
            margin: 1.5rem 0;
            li{
                color: white;
                a{
                    color: white;
                    font-size: 1.2rem;
                }
            }
        }
        button{
            @include btn-more-dark;
        }
    }
    .row{
        width: 75%;
        @include flex(space-between, stretch, row);
        .col{
            width: calc(100% / 3 - 1rem);
            height: 100%;
        }
    }
}
</style>