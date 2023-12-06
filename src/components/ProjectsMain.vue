<script>
import { store } from '../store';
import ListCardProjects from './ListCardProjects.vue';

    export default{
    data() {
        return {
            store:store,
            links:["ALL","INSTITUTIONAL","SOCIAL","EVENTS","INNOVATION", "ENVIROMENT","TECHNOLOGY"]
        };
    },
    components: { ListCardProjects }
}
</script>

<template>
    <section class="serv" id="PROJECTS">
        <h5>WE DO MORE FOR EVERYONE</h5>
        <h2>Actions & <span>Projects</span></h2>
        <ul>
            <li v-for="link in links">
            <a>{{ link }}</a>
            </li>
        </ul>
        <div class="row">
            <div class="col" v-for=" project in store.projects">
                <ListCardProjects :img="project.img" :title="project.title" :parag="project.parag"/>
                <i class="i-x fa-solid fa-arrow-right"></i>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped >
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.serv{
    width: 80%;
    margin: 0 auto;
    text-align: center;
    h5{
        @include sub-title;
    }
    h2{
        @include title;
    }
    ul{
        width: 80%;
        margin: 0 auto;
        @include flex(space-evenly, center, row);
        list-style: none;
        margin-bottom: 2rem;
        li{
            font-size: 1.2rem;
            padding: 0.5rem 0.8rem;
            border-radius: 5px;
            color: gray;
            &:hover{
                background-color: rgba(0, 166, 166, 0.7);
                border: none;
                color: black;
            }
        }
    }
    .row{
        width: 100%;
        @include flex(space-between, center, row);
        .col{
            width: calc(100% / 3 - 1rem);
            margin: 0.5rem;
            padding: 0;
            .i-x{
                display: none;
            }
            &:hover .i-x{
                display: inline-block;
                color: white;
                font-size: 1rem;
                top:10px;
                right: 10px;
                &:hover{
                    background: none;
                }
            }
        }
    }
}

</style>