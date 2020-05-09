<template>
  <div class="d-flex justify-center">
    <v-card
      width="100%"
      class="pa-6 experience-container blue lighten-5"
      :style="{
        'border-radius': '20px',
        'box-shadow': '3px 3px 3px #dadada, -3px -3px 3px #fafafa'
      }"
    >
      <div v-for="item in items" :key="item.id">
        <Experienceandprojectcomponent
          :item="item"
          v-on:read-more="$emit('read-more', item.id, item.type)"
        />
      </div>
    </v-card>
  </div>
</template>
<script>
import Experienceandprojectcomponent from "@/components/Experienceandprojectcomponent";
export default {
  name: "Experienceandprojectcontainer",
  components: {
    Experienceandprojectcomponent
  },
  props: {
    items: Array
  }
};
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .experience-container {
    margin: 24px 0;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .experience-container {
    margin: 24px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) and (max-width: 1200px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
