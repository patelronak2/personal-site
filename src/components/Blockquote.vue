<template>
  <div class="px-3 my-2" :style="styles">
    <p>
      {{ quote }}
      <br />
      <span class="font-weight-light">- {{ quoteAuthor }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Blockquote",
  props: ["quote", "quoteAuthor"],
  data() {
    return {
      styles: {
        "border-left": "2px solid #4A148C"
      }
    };
  }
};
</script>

<style scoped>
/* Medium devices (landscape tablets, 768px) */
@media only screen and (min-width: 768px) {
  p {
    font-size: 20px !important;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  p {
    font-size: 24px !important;
  }
}
</style>