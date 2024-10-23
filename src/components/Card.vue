<script setup>

    const props = defineProps({
    data: Object,
    });

</script>

<template>
    <div class="w-80 h-56 rounded-3xl m-4 relative group cursor-pointer">
        <img
            :src=data.img
            alt="Image"
            class="w-full h-full object-cover rounded-3xl"
        />
        <div 
            class="absolute inset-0 flex flex-col items-center text-center justify-center opacity-0 group-hover:opacity-100 bg-gradient-to-b from-black/70 to-black/100 text-cyan-100 rounded-3xl transition-opacity ease-in-out duration-200"
        >
            <p class="text-3xl pb-2 font-poiret">{{ data.title }}</p>
            <p class="text-md font-light">{{ data.tags }}</p>
        </div>
    </div>
</template>