<script setup>

    const close = defineEmits(['close']);
    const {data} = defineProps(['data']);

    const closeDetail = () => {
        close('close');
    };
   
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-rose-100 w-3/4 max-w-screen-md rounded-lg p-6 shadow-lg relative">
        <button @click="closeDetail" class="absolute top-2 right-4 transform translate-x-2 text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <img
            :src=data.img
            alt="Image"
            class="h-64 rounded-3xl"
        />
        <div class="text-2xl font-semibold mb-4 font-hachi">{{ data.title }}</div>
        <div class="font-bold mb-4 text-rose-600 uppercase">{{ data.stack }}</div>
        <div class="mb-4">{{ data.description }}</div>
        <div class="text-sm font-semibold mb-4">{{ data.date }}</div>
        <div class="text-sm font-semibold mb-4">durée : {{ data.length }}</div>
        <div class="text-sm font-semibold mb-4">auteurs : {{ data.authors }}</div>
        </div>
    </div>
</template>