<template>
  <v-container fluid v-resize="onResize" class="fill-height">
    <kinesis-container>
      <Animated />
      <v-row class="flex-md-row-reverse">
        <v-col cols="12" lg="6" class="d-flex align-center justify-center ma-2">
          <kinesis-element :strength="5" type="depth_inv" :originX="0">
            <Imagecontainer
              :styles="imgStyles"
              :path="imgPath"
              :img-width="imgSize"
            />
          </kinesis-element>
        </v-col>
        <v-col lg="5" offset-md="1" class="d-flex align-center ma-2">
          <div class="text-container">
            <kinesis-element :strength="5">
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
          </div>
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

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .text-container {
    width: 100% !important;
    margin: auto;
  }
  .display-2 {
    font-size: 36px !important;
    margin: 0 0 -10px 0;
  }

  .display-1 {
    font-size: 28px !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .text-container {
    width: 80% !important;
    margin: auto;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .display-2 {
    font-size: 80px !important;
    margin: 10px 0;
  }

  .display-1 {
    margin: 10px 0;
    font-size: 52px !important;
  }

  .text-container {
    width: 70% !important;
    margin: 50px auto;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
