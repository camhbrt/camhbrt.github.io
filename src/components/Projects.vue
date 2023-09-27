<script setup>
  import { ref, computed } from 'vue';
  import Card from './Card.vue';
  import ProjectDetail from './ProjectDetail.vue';
  import data from '../data'
  import Title from './Title.vue';


  const showDetail = ref(false);
  const selectedData = ref(null)


  const showSelectedData = (index) => {
    selectedData.value = data.projects[index];
    showDetail.value = true;
  };

</script>

<template>
    <div id="projects" class=" text-fuchsia-950 py-6"><!--m-20-->
      <Title :title="'Projects'"/>
      <p class="text-lg font-light md:text-center lg:text-xl">Here are some projects I worked on at Ada Tech School or in my free time.</p><!-- py-20-->
      <div class="flex flex-wrap justify-center"><!---->
        <Card
          v-for="(item, index) in data.projects"
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