<script>
import { store } from '../store';
import ContactsList from './ContactsList.vue';
import Input from './Input.vue';
    export default{
    data() {
        return {
            store:store,
        };
    },
    components:{
    ContactsList,
    Input
},
}
</script>

<template>
    <div class="touch" id="touch">
        <div class="left">
            <h5>SEND A MESSAGE</h5>
            <h2>Get in <span>Touch</span></h2>
            <p>We will respond to your message as soon as possible.</p>
            <Input />
        </div>
        <div class="right">
            <h3>Example Inc.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p>Quos sequi quia porro, nesciunt sapiente aspernatur minus.</p>
            <ul>
                <ContactsList :phone="store.contacts.phone" :mail="store.contacts.mail" :adress="store.contacts.adress"/>
            </ul>
            <button>VIEW MAP</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.touch{
    width: 80%;
    margin: 0 auto;
    padding: 100px 0;
    @include flex(space-between, self-start, row);
    gap: 2rem;
    .left{
        width: 60%;
        h5{
            @include sub-title;
        }
        h2{
            @include title;
            span{
                @include title-green;
            }
        }
        p{
            color: gray;
            margin-bottom: 1.5rem;
        }
    }
    .right{
        width: 40%;
        margin: 0 auto;
        padding: 1rem;
        h3{
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        p{
            color: gray;
            margin-bottom: 1.5rem;
        }
        ul{
            list-style: none;
        }
        button{
            @include btn-more;
            margin-top: 1rem;
        }
    }
}
</style>