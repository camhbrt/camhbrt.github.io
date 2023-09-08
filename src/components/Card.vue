<script setup>
    const props = defineProps({
        data: Object,
    })
</script>

<template>
    <div class="w-80 h-56 rounded-3xl m-12 relative group">
        <img
            :src=data.img
            alt="Image"
            class="w-full h-full object-cover rounded-3xl"
        />
        <div class="absolute inset-0 flex items-center text-center justify-center opacity-0 group-hover:opacity-90 bg-black text-purple-300 rounded-3xl text-4xl font-hachi">
            <p>{{ data.title }}</p>
        </div>
    </div>
</template>