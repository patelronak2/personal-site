<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <h1 class="text-center font-weight-regular">
        {{ headingText }}
        <div
          :style="{
            width: hover ? '80px' : '50px',
            'border-bottom': '2px solid #1A237E',
            margin: '5px auto',
            transition: '0.5s'
          }"
        ></div>
      </h1>
    </v-hover>
  </div>
</template>
<script>
export default {
  name: "Underlined",
  props: ["headingText"]
};
</script>
