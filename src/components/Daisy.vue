<script setup lang="ts">


const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const petalsNumber = random(4,13)
const size = random(40, 120)

const computePetalTransform = (index: number) => {
  const angle = (360 / petalsNumber) * index;
  return `rotate(${angle}, 100, 100)`;
};


const width = 25 - petalsNumber

</script>
<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    class="cursor-pointer"
  >
  
    <g v-for="index in petalsNumber" :key="index">
      <ellipse
      :transform="computePetalTransform(index)"
      cx="100"
      cy="50"
      :rx=width
      ry="40"
      stroke-width="1"
      class="stroke-slate-400 fill-white"
      />
    </g>
    <circle cx="100" cy="100" r="20" class="fill-amber-400" />
  </svg>
</template>

<style scoped>
svg {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
</style>