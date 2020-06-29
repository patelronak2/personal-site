<template>
  <v-card
    width="100%"
    class="pa-6 my-6 blue lighten-5"
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
