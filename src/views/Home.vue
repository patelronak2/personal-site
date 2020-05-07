<template>
  <v-container fluid v-resize="onResize">
    <kinesis-container>
      <Animated />
      <v-row no-gutters class="flex-md-row-reverse">
        <v-col
          cols="12"
          md="6"
          class="d-flex align-center justify-center justify-lg-start"
        >
          <kinesis-element :strength="10" type="depth_inv" :originX="0">
            <Imagecontainer
              :styles="imgStyles"
              :path="imgPath"
              :img-width="imgSize"
            />
          </kinesis-element>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center align-center pa-12"
        >
          <kinesis-element :strength="10">
            <div class="display-2 font-weight-bold py-3">{{ heading1 }}</div>
            <vue-typed-js
              :strings="['Reader', 'Thinker', 'Web Developer^2000 ']"
              :loop="true"
              :typeSpeed="100"
              :backSpeed="50"
              :contentType="'html'"
              :smartBackspace="true"
            >
              <div class="display-1 py-3">
                <span class="indigo--text text--darken-4">A </span>
                <span class="typing "></span>
              </div>
            </vue-typed-js>
            <Blockquote :quote="quote" :quote-author="quoteAuthor" />
            <div>
              <Socialmedia />
            </div>
          </kinesis-element>
        </v-col>
      </v-row>
    </kinesis-container>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Animated from "@/components/Animated";
import Blockquote from "@/components/Blockquote";
import Imagecontainer from "@/components/Imagecontainer";
import Socialmedia from "@/components/Socialmedia";

export default {
  name: "Home",
  components: {
    Animated,
    Blockquote,
    Imagecontainer,
    Socialmedia
  },
  data() {
    return {
      heading1: "I'M Ronak Patel",
      quote:
        "Two roads diverged in a wood, and I— I took the one less traveled by, And that has made all the difference.",
      quoteAuthor: "Robert Frost",
      imgStyles: {
        "box-shadow":
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        "border-radius": "20px",
        transform: "rotate(2deg)",
        border: "10px solid #fff"
      },
      imgPath: require("@/assets/ronak-4.jpeg"),
      imgSize: ""
    };
  },
  created() {
    this.onResize();
  },
  methods: {
    onResize() {
      let width = this.$vuetify.breakpoint.width;
      if (width < 500) {
        this.imgSize = "225";
      } else {
        this.imgSize = "450";
      }
    }
  }
};
</script>

