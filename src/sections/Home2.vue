<script setup lang="ts">
import { ref, computed, inject } from 'vue';
import data from '../data.js'

const store = inject('store')

const texts = computed(() => {
  if (store.value.isTranslated  )
    return data.text.en
  return data.text.fr
})

</script>

<template>
    <div class=" min-h-screen flex items-center justify-center">
        <div 
            class="absolute font-poiret text-center z-10 top-1/4 backdrop-blur-sm  p-8 rounded-xl transition-colors duration-1000"
            :class="store.isDarkMode ? ' bg-slate-50/5 text-cyan-200' : ' bg-slate-950/5 text-slate-950' "
        >
            <p class="title-1">Camille Hébert</p>
            <p class="subtitle-1">{{ texts.title }}</p>
        </div>
    </div>
</template>