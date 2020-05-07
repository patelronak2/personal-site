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
