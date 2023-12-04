<script>
    export default{
        data(){
            return{}
        }
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
    </section>

</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;

section{
    width: 80%;
    margin: 0 auto;
    padding-top: 100px;
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
}

</style>