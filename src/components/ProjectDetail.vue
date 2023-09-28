<script setup>
const close = defineEmits(["close"]);
const { data } = defineProps(["data"]);

const closeDetail = () => {
  close("close");
};
</script>

<template>
  <div class="fixed inset-0 bg-rose-100 sm:bg-black sm:bg-opacity-50 z-50 flex sm:items-center justify-center overflow-auto"><!---->
    <div class="bg-rose-100 max-w-screen-md rounded-3xl p-6 sm:shadow-lg relative "><!--lg:w-3/4-->
      
      <button @click="closeDetail" class="absolute top-2 right-4 transform translate-x-2 text-gray-500 hover:text-gray-700"><!---->
        <svg id="cross" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div class="flex flex-col md:flex-row"><!--flex-->

        <div class=""><!--p-2-->
          <p class="text-4xl font-semibold mb-4 font-hachi text-center"> {{ data.title }} </p><!---->
          <p class="font-bold mb-4 text-rose-600 uppercase text-center"> {{ data.stack }} </p><!---->
          <p class="text-sm font-semibold mb-2"> <font-awesome-icon icon="fa-solid fa-calendar-days" size="xl"/> : <span class="font-light">{{ data.date }}</span></p><!---->
          <p class="text-sm font-semibold mb-2"> <font-awesome-icon icon="fa-solid fa-users" class="" size="lg" /> : <span class="font-light">{{ data.authors }}</span></p><!---->
          <p v-html="data.description" class="mb-4"></p>
          <a :href="data.github" target="_blank" class="bg-rose-600 rounded-3xl text-rose-50 py-2 px-4 hover:bg-rose-500/80 active:bg-rose-600"> <!---->
            See project on github
            <font-awesome-icon icon="fa-brands fa-github" class="" /> <!---->
          </a>
        </div>

        <img :src="data.img" alt="Image" class="h-64 xl:h-80 rounded-3xl w-fit m-4 self-center" /><!---->

      </div>

    </div>
  </div>
</template>
