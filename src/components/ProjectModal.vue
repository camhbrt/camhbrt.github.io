<script setup>
const emits = defineEmits(["close"]);
const { data } = defineProps(["data"]);

const closeModal = () => {
  emits("close");
};
</script>

<template>
  <!-- dark overlay -->
  <div class="fixed inset-0 grid grid-cols-12 overflow-auto bg-black bg-opacity-70 z-50 ">

    <!-- modal background -->
    <div class="col-start-1 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 sm:h-fit my-auto bg-rose-100 rounded-3xl p-6 sm:shadow-lg relative ">
      
      <button 
        @click="closeModal" 
        class="absolute top-2 right-4 transform translate-x-2 text-gray-500 hover:text-gray-700"
      >
        <svg id="cross" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div class="flex flex-col md:flex-row">

        <div class="">
          <p class="text-4xl font-semibold mb-4 font-hachi text-center"> {{ data.title }} </p>
          <p class="font-bold mb-4 text-rose-600 uppercase text-center"> {{ data.stack }} </p>
          <p class="text-sm font-semibold mb-2"> <font-awesome-icon icon="fa-solid fa-calendar-days" size="xl"/> : <span class="font-light">{{ data.date }}</span></p>
          <p class="text-sm font-semibold mb-2"> <font-awesome-icon icon="fa-solid fa-users" class="" size="lg" /> : <span class="font-light">{{ data.authors }}</span></p>
          <p v-html="data.description" class="mb-4"></p>
          <a :href="data.github" target="_blank" class="bg-rose-600 rounded-3xl text-rose-50 py-2 px-4 hover:bg-rose-500/80 active:bg-rose-600"> 
            See project on github
            <font-awesome-icon icon="fa-brands fa-github" class="" />
          </a>
        </div>

        <img 
          :src="data.img" 
          :alt="`Illustration du projet ${data.title}`" 
          class="rounded-3xl h-fit w-1/2 self-center m-4" 
        />

      </div>

    </div>
  </div>
</template>
