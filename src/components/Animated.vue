<template>
  <div>
    <kinesis-element :strength="10" type="depth_inv" class="square-container">
      <div
        class="square"
        :style="{ border: '5px solid #b3e5fc', transform: 'rotate(15deg)' }"
      ></div>
      <div
        class="square"
        :style="{
          left: '260px',
          border: '5px solid #b3e5fc',
          transform: 'rotate(-5deg)'
        }"
      ></div>
      <div
        class="square"
        :style="{ top: '150px', left: '150px', border: '5px solid #b3e5fc' }"
      ></div>
    </kinesis-element>
  </div>
</template>
<script>
export default {
  name: "Animated"
};
</script>
<style scoped>
.square {
  width: 250px;
  height: 250px;
  position: absolute;
  border-radius: 5px;
  z-index: -1;
}
.square-container {
  position: relative;
  top: 50px;
  left: 150px;
}
</style>