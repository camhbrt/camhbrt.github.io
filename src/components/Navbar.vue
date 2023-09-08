<script>   
    export default {
      methods: {
        scrollToSection(sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        },
      },
    };
</script>

<template>
    <div  class="font-poiret uppercase flex py-4 fixed w-screen z-50 backdrop-blur-lg">
        <ul class="flex justify-evenly basis-10/12 text-2xl">
            <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('home')">Home</a></li>
            <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('about')">About</a></li>
            <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('projects')">Projects</a></li>
            <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('contacts')">Contacts</a></li>
        </ul>
        <div class="">icones linkedin github cv</div>
    </div>
</template>