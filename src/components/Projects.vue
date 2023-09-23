<script setup>
  import { ref, computed } from 'vue';
  import Card from './Card.vue';
  import ProjectDetail from './ProjectDetail.vue';
  import data from '../data'


  const showDetail = ref(false);
  const selectedData = ref(null)


  const showSelectedData = (index) => {
    selectedData.value = data[index];
    showDetail.value = true;
  };

</script>

<template>
    <div id="projects" class=" text-fuchsia-950 m-20">
      <div class="">
        <p class="lg:text-5xl text-4xl">Projects:</p>
        <p class="font-hachi text-4xl py-20">Here are some projects I worked on :</p>
      </div>
      <div class="flex flex-wrap justify-center">
        <Card
          v-for="(item, index) in data"
          :key="index"
          :data="item"
          @click="showSelectedData(index)"/>
      </div>
      <ProjectDetail 
        v-if="showDetail"
        :data="selectedData"
        @close="showDetail = false" />
    </div>
</template>