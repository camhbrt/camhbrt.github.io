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
    <div  class="uppercase flex pt-4 fixed w-screen z-40 backdrop-blur-lg text-fuchsia-950 font-outfit font-extralight">
        <ul class="flex justify-evenly basis-10/12 text-2xl">
          <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('home')">Home</a></li>
          <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('projects')">Projects</a></li>
          <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('about')">About</a></li>
          <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('contacts')">Contacts</a></li>
        </ul>


        <div class="flex pb-2">

          <a href="https://github.com/camhbrt" target="_blank">
            <font-awesome-icon 
            icon="fa-brands fa-github"
            size="2x"
            class="hover:text-rose-600 px-2" />
          </a>

          <a href="https://www.linkedin.com/in/camille-hebert-dev/" target="_blank">
            <font-awesome-icon 
            icon="fa-brands fa-linkedin"
            size="2x"
            class="hover:text-rose-600 px-2" />
          </a>

          <a href="assets/CV_Camille_Hebert_DeveloppeuseWeb.pdf" download="CV_Camille_Hebert_DeveloppeuseWeb.pdf">
            <font-awesome-icon 
            icon="fa-solid fa-file-pdf"
            size="2x"
            class="hover:text-rose-600 px-2" />
          </a>
        </div>

    </div>
</template>