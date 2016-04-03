<script>
  import Events from './events' 
  import Navbar from './components/Navbar.vue'
  import windowsill from 'windowsill'

  let resizer = windowsill.resizer;

  export default {
    name: "App",
    components: {
      'navbar':Navbar
    },
    ready(){
    	resizer.addListener(this.resize);
    	resizer.bind();
    },
    methods: {
    	resize(){
    		this.$broadcast(Events.WINDOW_RESIZE);
    	}
    }
  }
</script>

<template>
  <navbar></navbar>
  <router-view></router-view>
</template>
