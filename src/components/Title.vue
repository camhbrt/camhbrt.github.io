<script setup>
    import { ref } from 'vue';
    const props = defineProps({
    title: String,
    });
</script>

<template>
    <div class="relative flex items-center justify-center text-center my-4">
      <p class="text-5xl lg:text-6xl pb-2 font-poiret text-cyan-200">{{title}}</p>
      <p class="absolute -top-1 text-5xl  uppercase text-center text-cyan-200/10 font-black sm:text-6xl lg:text-7xl sm:-top-2">{{title}}</p>
    </div>
</template>