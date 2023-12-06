<script>
import { store } from '../store';
    export default{
        data(){
            return{
                store
            }
        },
    methods:{
        getInput(){
            this.store.incomeReq.push(this.store.inputs.name) 
            this.store.inputs.name = "",
            this.store.incomeReq.email= (this.store.inputs.email) 
            this.store.inputs.email = "",
            this.store.incomeReq.phone= (this.store.inputs.phone) 
            this.store.inputs.phone = "",
            this.store.incomeReq.info= (this.store.inputs.info) 
            this.store.inputs.info = "",
            this.store.incomeReq.message= (this.store.inputs.message) 
            this.store.inputs.message = ""
        }
    }
}
</script>

<template>
    <section>
        <input type="text" placeholder="Name" v-model.trim="store.inputs.name" />
        <input type="email" placeholder="Email" v-model.trim="store.inputs.email" />
        <input type="number" placeholder="phone" v-model.trim="store.inputs.phone" />
        <select name="Info" id="info" v-model="store.inputs.info">
            <option value="EU">EU</option>
            <option value="US">US</option>
            <option value="ASIA">ASIA</option>
            <option value="AFRICA">AFRICA</option>
        </select>
    </section>
    <div>
        <textarea id="message" name="message" placeholder="Message.." rows="4" cols="50" v-model.trim="store.inputs.message"></textarea>
        <button @click="getInput">SEND</button>
    </div>

</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

section{
    width: 100%;
    @include flex(space-between, center, row);
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0.5rem;
    input{
        display: inline-block;
        width: calc(100% / 2 - 1rem);
        padding: 0.5rem;
        font-size: 1rem;
    }
    select{
        width: calc(50% - 0.9rem);
        padding: 0.5rem;
        font-size: 1rem;
    }
}
div{
    width: 100%;
    padding: 0.5rem;
    textarea{
    width:100%;
    margin: 0 auto;
    font-size: 1rem;
    padding: 0.5rem;
    }
    button{
        @include btn-touch;
        margin-top: 1.5rem;
    }
}

</style>