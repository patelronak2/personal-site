<template>
  <v-app>
    <Sidebar />
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
import Sidebar from "@/components/Sidebar";
export default {
  name: "Default",
  components: {
    Sidebar
  }
};
</script>
<style scoped>
.fade-enter-active {
  /* transition: opacity 0.5s; */
  transition: all 0.5s;
}
.fade-enter {
  /* opacity: 0; */
  transform: translateX(80%);
}
</style>
