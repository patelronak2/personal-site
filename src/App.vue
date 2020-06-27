<template>
  <v-app>
    <transition name="fade" mode="out-in">
      <component :is="layout"></component>
    </transition>
  </v-app>
</template>

<script>
import Default from "@/layouts/Default";
import App from "@/layouts/App";
export default {
  name: "App",
  components: {
    "default-layout": Default,
    "new-layout": App
  },
  computed: {
    layout() {
      return "new-layout";
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
