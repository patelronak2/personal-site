<template>
  <v-app>
    <Appbar @toggleDrawer="drawer = !drawer" />
    <Drawer :drawer="drawer" @toggleDrawer="toggleDrawer($event)" />
    <v-content class="blue lighten-5">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>
<script>
import Appbar from "@/components/Appbar";
import Drawer from "@/components/Drawer";
export default {
  name: "App",
  components: {
    Appbar,
    Drawer
  },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleDrawer(event) {
      this.drawer = event;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
