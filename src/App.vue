<template>
  <navbar></navbar>

  <div class="app">
    <div class='container mainblock'>
      <router-view></router-view>
    </div>

 <ftr></ftr>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar";
import Ftr from "@/components/Footer";

export default {
  components: {
    Navbar, Ftr
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 0;
}

.mainblock {
  margin-top: 10px; 
  margin-bottom: 25px; 
}
</style>
