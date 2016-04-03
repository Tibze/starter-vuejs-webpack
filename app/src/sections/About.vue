<script>
  export default {
    name: "About",
    created(){
      console.log("about created");
    },
    init(){
      console.log("about init");
    },
    ready(){
      console.log("about ready");
    },
    detached(){
      console.log("about detached");
    }
  }
</script>

<template>
  <div class="container">
    <h2>About Us</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</template>
