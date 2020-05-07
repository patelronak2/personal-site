<template>
  <div class="display-2 font-weight-bold text-center py-3">
    {{ normal }}
    <span class="indigo--text text--darken-4"> {{ coloured }}</span>
  </div>
</template>
<script>
export default {
  name: "Pageheading",
  props: ["normal", "coloured"]
};
</script>