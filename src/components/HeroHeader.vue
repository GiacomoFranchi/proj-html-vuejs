<script>
export default {
  data() {
    return {}
  }
}
</script>

<template>
<section class="hero">
    <div>
        <h2>Ready <span>Team</span></h2>
        <p>No matter what your company needs, we will be ready to assist you in the best possible way.</p>
        <div>
            <button id="btn-touch">GET IN TOUCH</button>
            <button id="btn-more">READ MORE</button>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

.hero{
    width: 100%;
    background-image: url(../assets/img/bg-parallax.png);
    height: 700px;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    div{
        width: 50%;
        margin: auto;
        align-self: center;
        text-align: center;
        h2{
            font-size: 4rem;
            margin-bottom: 1rem;
            span{
                background-color: rgba(5, 130, 131, 0.3);
                color:rgb(5, 130, 131) ;
                border-radius: 5px;
                padding: 0.3rem 0.5rem;
            }
        }
        p{
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        div{
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            #btn-touch{
                @include btn-touch;
            }
            #btn-more{
                @include btn-more; 
            }
        }
    }
}
</style>