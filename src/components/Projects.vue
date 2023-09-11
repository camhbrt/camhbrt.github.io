<script setup>
  import { ref, computed } from 'vue';
  import Card from './Card.vue';
  import ProjectDetail from './ProjectDetail.vue';

  const data = [
    { 
      title: "Mystery Quest", 
      img:"./img/mystery-mini.png",
      description: "Mystery Quest est une application mobile de chasse au trésor via géolocalisation. Authentification, affichage des quêtes issues d'une base de données, gestion de la géolocalisation, gestion des scores",
      date: "Septembre 2023",
      stack: "React-native | Expo | Node.JS | Express | mysql",
      tools: "Figma, Notions, Git, Github, VSCode, Slack",
      authors: "Camille Hébert, Alan Kalkan, Sayadyna Mehraik",
      length: "4 semaines",
    }, 
    { 
      title: "Pawpawpaw", 
      img:"./img/pawpawpaw-mini.png" ,
      description: "Pawpawpaw est un réseau social de partage de photographie (type instagram). Authentification avec Laravel Breeze, ",
      date: "Août 2023",
      stack: "PHP | Laravel | PostgreSQL | Eloquent",
      tools: "Docker, Figma, Git, Github, VSCode, Slack",
      authors: "Camille Hébert, Thomas Saïag, Bintou Traoré",
      length: "2 semaines"
    },
    { 
      title: "Archi-design", 
      img:"./img/maelle-mini.png" ,
      description: "Portfolio d'une étudiante en architecture d'intérieur et design. Site vitrine utilisant React. ",
      date: "Juillet 2023",
      stack: "React.JS | Tailwind",
      tools: "Figma, Git, Github, VSCode",
      authors: "Camille Hébert",
    },
    { 
      title: "Around the meuble", 
      img:"./img/meuble-mini.png" ,
      description: "Site de e-commerce. Deux équipes : l'une commence par le front, l'autre par le back, et inversement en semaine 2. ",
      date: "Juin 2023",
      stack: "React | Tailwind | Node.js | Express | Sequelize",
      tools: "Docker, Figma, Git, Github, VSCode, Slack",
      authors: "Clément Badin, Hanâa Belhamidi, Benjamin Dromard, Camille Hébert, Sayadyna Mehraik, Mischaël Phémius, Clara Salazar, Bintou Traoré et Jean-Jacques Valmont",
      length: "2 semaines" 
    },
    { 
      title: "Motivational quotes", 
      img:"https://picsum.photos/400" ,
      description: "Extension chrome qui affiche des citations motivantes issues d'une base de données. Réalisé exclusivement en pair-programming",
      date: "Mai 2023",
      stack: "html | css | Javascript | Node.js | Express | Mongo db",
      tools: "Git, Github, VSCode, Trello, Slack",
      authors: "Camille Hébert, Steve Mafoa, Clara Salazar",
      length: "2 semaines" 
    },
    { 
      title: "Dataviz SNCF", 
      img:"./img/dataviz-mini.png" ,
      description: "Application web qui affiche des données issues de l'API de la SNCF",
      date: "Mars 2023",
      stack: "html | css | Javascript | Bootstrap |",
      tools: "Git, Github, VSCode, Trello, Slack",
      authors: "Camille Hébert, Mischaël Phémius, Guillaume Pagès",
      length: "2 semaines" 
    },
    { 
      title: "Amelia's Castle", 
      img:"./img/amelias-mini.png" ,
      description: "Jeu sur console virtuelle de type platformer",
      date: "Février 2023",
      stack: "lua",
      tools: "VSCode, Trello, Slack",
      authors: "Laure Favre, Camille Hébert, Sayadyna Mehraik, Djeneba Soumare",
      length: "2 semaines"
    },
  ];

  const showDetail = ref(false);
  const selectedData = ref(null)


  const showSelectedData = (index) => {
    selectedData.value = data[index];
    showDetail.value = true;
  };

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
          :data="item"
          @click="showSelectedData(index)"/>
      </div>
      <ProjectDetail 
        v-if="showDetail"
        :data="selectedData"
        @close="showDetail = false" />
    </div>
</template>