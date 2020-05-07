<template>
  <div>
    <p>
      <span class="font-weight-bold">{{ label }}</span>
      <v-btn icon :href="github" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon :href="linkedin" target="_blank">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn icon :href="twitter" target="_blank">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </p>
  </div>
</template>
<script>
export default {
  name: "Socialmedia",
  props: ["label"],
  data() {
    return {
      github: "https://github.com/patelronak2",
      linkedin: "https://www.linkedin.com/in/ronakjpatel/",
      twitter: "https://twitter.com/ronakpatel_1811"
    };
  }
};
</script>