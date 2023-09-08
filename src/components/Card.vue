<script setup>
    console.log("voici une carte projet")
    const props = defineProps({
        data: Object,
    })
</script>

<template>
    <div class="w-80 h-56 rounded-3xl m-12 bg-white">
        <img
            :src=data.img
            alt="Image"
            class="w-full h-full object-cover rounded-3xl"
        />
        <!-- <p>{{ data.title }}</p>
        <p>{{ data.description }}</p> -->
    </div>
</template>