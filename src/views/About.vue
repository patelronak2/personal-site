<template>
  <div class="about">
    <kinesis-container>
      <kinesis-element :strength="10">
        <Pageheading normal="About" coloured="Me" />
        <div class="d-flex justify-center">
          <Blockquote :quote="quote" :quote-author="quoteAuthor" />
        </div>

        <v-row no-gutters class="my-6">
          <v-col cols="12" md="6" class="d-none d-md-flex justify-end px-6">
            <Imagecontainer
              :styles="imgStyles"
              :path="imgPath"
              :img-width="imgSize"
            />
          </v-col>
          <v-col cols="12" md="6" class="pa-6">
            <div class="headline font-weight-bold text-uppercase">
              Ronak Patel
            </div>
            <div class="title font-weight-regular">
              <span class="indigo--text text--darken-4">Full Stack</span>
              Web Developer based in
              <span class="indigo--text text--darken-4">Canada</span>
            </div>
            <div class="my-6">
              <p>
                <span class="font-weight-bold">Degree:</span>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on"> CST</span>
                  </template>
                  <span>Comupter Systems Technology</span>
                </v-tooltip>
                - Software Development
              </p>
              <p>
                <span class="font-weight-bold">College:</span>
                Mohawk College
              </p>
              <p>
                <span class="font-weight-bold">City:</span>
                Hamilton, ON
              </p>
              <p>
                <span class="font-weight-bold">Email:</span>
                patelronak2@hotmail.com
              </p>
              <Socialmedia label="Social Media:" />
            </div>
          </v-col>
        </v-row>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>
<script>
import Blockquote from "@/components/Blockquote";
import Imagecontainer from "@/components/Imagecontainer";
import Socialmedia from "@/components/Socialmedia";
import Pageheading from "@/components/Pageheading";
export default {
  name: "About",
  components: {
    Blockquote,
    Imagecontainer,
    Socialmedia,
    Pageheading
  },
  data() {
    return {
      quote:
        "The steps you take don’t need to be big. They just need to take you in the right direction.",
      quoteAuthor: "Jemma Simmons",
      imgPath: require("@/assets/ronak-5.jpeg"),
      imgSize: "400",
      imgStyles: {
        "box-shadow":
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        "border-radius": "20px",
        border: "10px solid #fff"
      }
    };
  }
};
</script>
<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .about {
    margin: -10px 0 0 -10px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
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
