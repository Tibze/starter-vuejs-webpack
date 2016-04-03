<script>

    import Events from '../events' 
    import Api from '../services/api' 

    export default {

        name: "Home",
        data(){
            return {

            }
        },
        ready(){

            this.$on(Events.WINDOW_RESIZE,this.onResize)

            Api.getQuote(this).then(function(response){
                console.log(response);
                this.$set('randomData',response.data);
                this.setRandomQuote();
            }, function(response){
                console.log("error");
                console.log(response);
            });

        },
        methods:{
            onResize(){
                console.log("resize in Home");
            }
        }

    }

</script>

<template>

    <div class="container">
        <!-- <img src="/assets/images/logo.png"/> -->
        <div class="vue-logo"></div>
        <h1 class="text-center">Stack Vue JS (1.X.X) / Webpack</h1>
        <h4 class="text-center">Enjoy the meal buddy</h4>
    </div>

</template>
