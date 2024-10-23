<script setup>
  import { ref, computed } from 'vue';
  import Card from '../components/Card.vue';
  import ProjectModal from '../components/ProjectModal.vue';
  import data from './../data'
  import Title from '../components/Title.vue';
  import { useScrollLock } from '@vueuse/core'


  const showDetail = ref(false);
  const selectedData = ref(null)
  const filteredProjects = ref(data.projects);


  const isScrollLocked = useScrollLock(document.body)

  const openModal = (index) => {
    selectedData.value = data.projects[index];
    showDetail.value = true;
    console.log('is Locked !')
    isScrollLocked.value = true
  };

  const closeModal = () => {
    showDetail.value = false
    isScrollLocked.value = false
  }

  const showAllProjects = () => {
    filteredProjects.value = data.projects;
  };
  const showFullstackProjects = () => {
    filteredProjects.value = data.projects.filter(project => project.fullstack === true);
  };
  const showJavascriptProjects = () => {
    filteredProjects.value = data.projects.filter(project => project.js === true);
  };
  const showPersonnalProjects = () => {
    filteredProjects.value = data.projects.filter(project => project.team === false);
  };

</script>

<template>
    <div id="projects" class=" text-cyan-100 py-6">
      <Title :title="'Projects'"/>
      <p class="text-lg font-light md:text-center lg:text-xl">Here are some projects I worked on at Ada Tech School or in my free time.</p><!-- py-20-->
      <div id="filters" class="flex flex-wrap justify-center">
        <p class="m-2">Filters : </p>
        <button @click="showAllProjects" class="px-2 m-2 border border-cyan-100 hover:border-amber-500 text-cyan-100 hover:text-amber-500 rounded-xl active:tracking-wide font-extralight">All projects</button>
        <button @click="showFullstackProjects" class="px-2 m-2 border border-cyan-100 hover:border-amber-500 text-cyan-100 hover:text-amber-500 rounded-xl active:tracking-wide font-extralight">Full-stack</button>
        <button @click="showJavascriptProjects" class="px-2 m-2 border border-cyan-100 hover:border-amber-500 text-cyan-100 hover:text-amber-500 rounded-xl active:tracking-wide font-extralight">Javascript</button>
        <button @click="showPersonnalProjects" class="px-2 m-2 border border-cyan-100 hover:border-amber-500 text-cyan-100 hover:text-amber-500 rounded-xl active:tracking-wide font-extralight">Personnal projects</button>
      </div>
      <div class="flex flex-wrap justify-center">
        <Card
          v-for="(item, index) in filteredProjects"
          :key="index"
          :data="item"
          @click="openModal(index)"/>
      </div>
      <ProjectModal 
        v-if="showDetail"
        :data="selectedData"
        @close="closeModal" />
    </div>
</template>