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
            color: rgb(33, 51, 62);
            span{
                @include title-green;
            }
        }
        p{
            font-size: 1.8rem;
            width: 80%;
            margin: 0 auto;
            margin-bottom: 1rem;
            color: gray;
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