<template>
  <v-app>
    <Navbar />
    <v-content class="blue lighten-5">
      <v-container fluid>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,200,300,400,500,600,700,800,900&display=swap");
body {
  font-family: "Roboto Slab", serif;
}
.fade-enter-active {
  /* transition: opacity 0.5s; */
  transition: all 0.5s;
}
.fade-enter {
  /* opacity: 0; */
  transform: translateX(80%);
}
</style>
