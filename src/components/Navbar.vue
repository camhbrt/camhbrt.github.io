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
    <div  class="uppercase flex justify-around py-4 fixed w-screen z-40 backdrop-blur-lg  text-fuchsia-950 font-outfit font-extralight bottom-0 sm:bottom-auto "> <!--retirer bottom-0 à partir de sm -->
        <ul class="flex justify-evenly basis-10/12 text-2xl">
          <li class="hover:cursor-pointer hover:text-rose-600 ">
            <a @click="scrollToSection('home')" class="flex">
              <font-awesome-icon icon="fa-solid fa-home" class="hover:text-rose-600 px-2" />
              <span class="hidden sm:block">Home</span>
            </a>
          </li>
          <li class="hover:cursor-pointer hover:text-rose-600 ">
            <a @click="scrollToSection('projects')" class="flex">
              <font-awesome-icon icon="fa-regular fa-images" class="hover:text-rose-600 px-2" />
              <span class="hidden sm:block">Projects</span>
            </a>
          </li>
          <li class="hover:cursor-pointer hover:text-rose-600  ">
            <a @click="scrollToSection('about')" class="flex">
              <font-awesome-icon icon="fa-solid fa-address-card" class="hover:text-rose-600 px-2" />
              <span class="hidden sm:block">About</span>
            </a>
          </li>
          <li class="hover:cursor-pointer hover:text-rose-600 ">
            <a @click="scrollToSection('contacts')" class="flex">
              <font-awesome-icon icon="fa-solid fa-envelope" class="hover:text-rose-600 px-2" />
              <span class="hidden sm:block">Contacts</span>
            </a>
          </li>
        </ul>
    </div>
</template>