
<template>
    <div  class="font-poiret uppercase flex bg-neutral-50/25 py-4">
        <ul class="flex justify-evenly basis-10/12 text-2xl">
            <li class="hover:cursor-pointer"><a @click="scrollToSection('home')">Home</a></li>
            <li class="hover:cursor-pointer"><a @click="scrollToSection('about')">About</a></li>
            <li class="hover:cursor-pointer"><a @click="scrollToSection('projects')">Projects</a></li>
            <li class="hover:cursor-pointer"><a @click="scrollToSection('contacts')">Contacts</a></li>
        </ul>
        <div class="">icones linkedin github cv</div>
    </div>
</template>

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