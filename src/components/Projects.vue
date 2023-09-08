<script setup>
  import Card from './Card.vue';

  const data = [
    { title: "Mystery Quest", description: "desc1", img:"/img/mystery-mini.png"},
    { title: "Pawpawpaw !", description: "desc2", img:"/img/pawpawpaw-mini.png" },
    { title: "Maëlle", description: "desc2", img:"/img/maelle-mini.png" },
    { title: "Around the meuble", description: "desc2", img:"/img/meuble-mini.png" },
    { title: "Motivational quotes", description: "desc2", img:"https://picsum.photos/400" },
    { title: "Dataviz SNCF", description: "desc2", img:"/img/dataviz-mini.png" },
    { title: "Amelia's Castle", description: "desc2", img:"/img/amelias-mini.png" },
  ];

</script>

<template>
    <div id="projects" class=" text-fuchsia-950  m-10">
      <div class="px-20">
        <p class="font-poiret text-5xl py-20">Here are some projects I worked on :</p>
      </div>
      <div class="flex flex-wrap justify-center">
        <Card
          v-for="(item, index) in data"
          :key="index"
          :data="item"/>
      </div>
    </div>
</template>