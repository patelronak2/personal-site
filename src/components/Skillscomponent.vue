<template>
  <div class="d-flex justify-center" :style="{ height: '100%' }">
    <v-hover v-slot:default="{ hover }">
      <v-card
        width="100%"
        :dark="hover"
        :class="{ 'blue lighten-5': !hover, 'indigo darken-4': hover }"
        class="pa-3 ma-3"
        :style="{
          'border-radius': '20px',
          position: 'relative',
          top: hover ? '-10px' : '0px',
          transition: '0.5s',
          'box-shadow': '3px 3px 3px #dadada, -3px -3px 3px #fafafa'
        }"
      >
        <div class="title">{{ title }}</div>
        <ul :style="{ 'list-style': 'square' }">
          <li v-for="technology in technologies" :key="technology.name">
            {{ technology.name }}
          </li>
        </ul>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "Skillcomponents",
  props: {
    technologies: Array,
    title: String
  }
};
</script>
