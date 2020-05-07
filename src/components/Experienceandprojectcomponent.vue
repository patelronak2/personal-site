<template>
  <div
    :style="{
      'border-left': '2px solid ' + item.borderColor,
      position: 'relative'
    }"
    class="px-2 my-3"
  >
    <div
      :style="{
        position: 'absolute',
        left: '-9px',
        top: '17px',
        width: '15px',
        height: '15px',
        'border-radius': '50%',
        'background-color': item.borderColor
      }"
    ></div>
    <div class="title">{{ item.title }}</div>

    <div class="subtitle-2 indigo--text text--darken-4">
      {{ item.toFrom }}
    </div>
    <div class="my-2 body-1">
      {{ item.details }}
      <v-btn icon @click="$emit('read-more', item.id, item.type)">
        <v-icon small>mdi-information-outline</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "Experienceandprojectcomponent",
  props: {
    item: Object
  }
};
</script>