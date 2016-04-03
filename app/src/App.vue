<script>
  import Navbar from './components/Navbar.vue'

  export default {
    name: "App",
    components: {
      'navbar':Navbar
    }
  }
</script>

<template>
  <navbar></navbar>
  <router-view></router-view>
</template>
