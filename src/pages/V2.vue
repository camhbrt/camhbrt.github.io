<script setup lang="ts">
import { ref, computed, provide } from 'vue';
import Daisy from '../components/Daisy.vue';
import Home2 from '../sections/Home2.vue';
import data from '../data.js'
import Header2 from '../components/Header2.vue';

/** Global variables */
const store = ref({
  isDarkMode: false,
  isTranslated: false
})
provide('store', store)

const texts = computed(() => {
  if (store.value.isTranslated  )
    return data.text.en
  return data.text.fr
})
provide('texts', texts)

/** Utils */
const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/** Daisies related stuff */
const daisies = ref(Array.from({ length: getRandomInt(5, 12) }, () => ({
    y: `${getRandomInt(0, 10) * 10}%`,
    x: `${getRandomInt(0, 16) * 6.25}%`,
  })))

const createDaisy = () => {
  daisies.value.push({
    y: `${getRandomInt(0, 10)*10}%`,
    x: `${getRandomInt(0, 16)*6.25}%`,
  })
}
</script>

<template>
  <div 
  class="bg-gradient-to-bl h-full"
  :class="store.isDarkMode ? 'from-slate-950 to-gray-950':' from-blue-100 to-cyan-200'"
  >
    <Daisy
      v-for="(daisy, index) in daisies"
      :key="index"
      class="animate-spin-slow fixed opacity-95"
      :style="{ top: daisy.y, left: daisy.x }"
      @click="createDaisy()"
    />

    <Header2/>
    

    <!-- Page Sections -->
    <Home2/>
    <div id="About" class="h-screen  my-10 bg-black/5"><p>A propos</p></div>
    <div id="Work" class="h-screen  my-10 bg-black/5"><p>Mes projets</p></div>
    


  </div>
</template>

<style scoped>

</style>
