<script>
  import QuoteService from '../services/quote'

  export default {
    name: "Quote",

    data(){
      return {
        randomData:null,
        quote: ""
      }
    },

    ready() {
      QuoteService.getQuote(this).then(function(response){
        console.log(response);
        this.$set('randomData',response.data);
        this.setRandomQuote();
      }, function(response){
        console.log(response);
      });
    },

    methods: {

      setRandomQuote(){
        console.log(this.randomData);
        var min = 0;
        var max = this.randomData.length;
        var n = Math.floor(Math.random() * (max - min) + min);
        this.$set('quote', this.randomData[n].about);

      }

    }

  }
</script>

<template>
  <div class="container">
    <h2>Random Quote</h2>
    <p>
      {{quote}}
    </p>
  </div>
</template>
