<script setup>

    const props = defineProps({
    data: Object,
    });

    const showSelectedData = () => {
    emit('click');
    };


</script>

<template>
    <div class="w-80 h-56 rounded-3xl m-12 relative group cursor-pointer">
        <img
            :src=data.img
            alt="Image"
            class="w-full h-full object-cover rounded-3xl"
        />
        <div 
            class="absolute inset-0 flex items-center text-center justify-center opacity-0 group-hover:opacity-90 bg-black text-purple-300 active:text-rose-600 rounded-3xl text-4xl font-hachi"
            @click="openDetail = true">
            <p>{{ data.title }}</p>
        </div>
    </div>
</template>