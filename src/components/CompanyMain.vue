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
    <section class="comp">
        <div class="left-side">
            <div class="side">
                <h5>ABOUT THE NETWORK</h5>
                <h2><span>The</span> Company</h2>
                <p>For 12 years we have been providing audit and warranty, financial advice, risk advice and related services to select clients.</p>
                <div class="row">
                    <div class="col" v-for=" company in store.companys">
                        <ListCard :icon="company.icon" :title="company.title" :parag="company.parag"/>
                    </div>
                </div>
                <div class="btn-zone">
                    <button id="btn-touch">GET IN TOUCH</button>
                    <button id="btn-more">READ MORE</button>
                </div>
            </div>
        </div>
        <div class="rigth-side">
            <img src="../assets/img/about-4.jpg" alt="About img">
        </div>
        <div class="d top">
            <img src="../assets/img/bullets.png" alt="">
        </div>
        <div class="d bottom">
            <img src="../assets/img/bullets.png" alt="">
        </div>
    </section>
</template>

<style lang="scss">
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.comp{
    position: relative;
   width: 100%;
   background-color: rgb(17, 17, 23);
   display: flex;
   .left-side{
        width: calc(100% / 2 - 1rem);
        margin-left: 1rem;
        padding: 100px 10px 100px 0;
        @include flex(flex-start, flex-end, column);
        .side{
            width: 75%;
            
            h5{
                @include sub-title;
            }
            h2{
                @include title;
                color: white;
                span{
                    @include title-green;
                    color: white;
                }
            }
            p{
                color: white;
            }
            .row{
                width: 100%;
                @include flex(space-between, center, row);
                flex-wrap: wrap;
                margin: 2rem 0;
                .col{
                    width: calc(100% / 2 - 2rem);
                    margin: 15px 0;
                    .card{
                        width: 100%;
                        div{
                            display: flex;
                            flex-direction: row;
                            gap: 0.5rem;
                            i{
                            color:rgb(5, 130, 131);
                            font-size: 1.8rem;
                            margin-bottom: 1rem;
                            position: relative;
                            }
                            h3{
                            font-size: 1.5rem;
                            margin-bottom: 1rem;
                            color: white;
                            }
                        }

                    }
                }
            }
            .btn-zone{

                #btn-touch{
                    @include  btn-touch;
                    margin-right: 2rem;
                }
                #btn-more{
                    @include btn-more-dark;
                }
            }
        }
   }
   .rigth-side{
    width: 50%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
   }
   .d{
    position: absolute;
    width: 100px;
    height: 60px;
    img{
        width: 100%;
        height: 100%;
    }
   }
   .d.top{
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
   }
   .d.bottom{
    left: 50%;
    bottom: 0;
    transform: translate(-50%, +50%);
   }
}

</style>