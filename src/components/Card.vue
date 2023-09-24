<script setup>

    const props = defineProps({
    data: Object,
    });

    const showSelectedData = () => {
    emit('click');
    };


</script>

<template>
    <div class="w-80 h-56 rounded-3xl m-4 relative group cursor-pointer"><!--m-12-->
        <img
            :src=data.img
            alt="Image"
            class="w-full h-full object-cover rounded-3xl"
        />
        <div 
            class="absolute inset-0 flex flex-col items-center text-center justify-center opacity-0 group-hover:opacity-90 bg-black text-purple-300 active:text-rose-600 rounded-3xl"
            @click="openDetail = true">
            <p class="text-3xl pb-2">{{ data.title }}</p>
            <p class="text-md font-light">{{ data.tags }}</p>
        </div>
    </div>
</template>