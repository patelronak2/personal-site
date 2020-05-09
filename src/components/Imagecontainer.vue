<template>
  <div>
    <v-card :style="styles">
      <v-img
        :src="path"
        :width="imgWidth"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Imagecontainer",
  props: {
    styles: Object,
    path: String,
    imgWidth: String
  }
};
</script>