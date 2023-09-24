<script setup>
const close = defineEmits(["close"]);
const { data } = defineProps(["data"]);

const closeDetail = () => {
  close("close");
};
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-rose-100 sm:bg-black sm:bg-opacity-50 z-50">
    <div class="bg-rose-100 lg:w-3/4 max-w-screen-md rounded-lg p-6 sm:shadow-lg relative">
      <button
        @click="closeDetail"
        class="absolute top-2 right-4 transform translate-x-2 text-gray-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <div class="lg:flex">
        <div>
          <p class="text-4xl font-semibold mb-4 font-hachi text-center">
            {{ data.title }}
          </p>
          <p class="font-bold mb-4 text-rose-600 uppercase text-center">
            {{ data.stack }}
          </p>
          <p v-html="data.description"></p>
          <p class="text-sm font-semibold mb-4">
            When : <span class="font-light">{{ data.date }}</span>
          </p>
          <p class="text-sm font-semibold mb-4">
            Length : <span class="font-light">{{ data.length }}</span>
          </p>
          <p class="text-sm font-semibold mb-4">
            Creators : <span class="font-light">{{ data.authors }}</span>
          </p>
          <a
            :href="data.github"
            target="_blank"
            class="text-rose-600 underline hover:no-underline"
            >lien github</a
          >
        </div>
        <img :src="data.img" alt="Image" class="h-64 rounded-3xl" />
      </div>
    </div>
  </div>
</template>
