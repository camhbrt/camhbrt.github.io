<script setup>
    import { ref } from 'vue';
    const props = defineProps({
    title: String,
    });
</script>

<template>
    <div class="relative flex items-center justify-center text-center my-4">
      <p class="text-5xl pb-2 font-flowers">{{title}}</p>
      <p class="absolute -top-1 text-5xl uppercase text-center text-fuchsia-950/10 font-black sm:text-6xl sm:-top-2">{{title}}</p>
    </div>
</template>