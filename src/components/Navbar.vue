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
    <div  class="flex justify-around py-4 fixed w-screen z-10 backdrop-blur-xl bg-slate-50/5  text-cyan-100 font-poiret bottom-0 sm:bottom-auto"> <!--retirer bottom-0 à partir de sm -->
        <p class="mx-auto  text-2xl lg:text-3xl hidden md:block">Camille Hébert</p>
        <ul class="flex justify-evenly basis-10/12 text-2xl uppercase">
          <li class="hover:cursor-pointer hover:text-amber-500 ">
            <a @click="scrollToSection('home')" class="flex">
              <font-awesome-icon icon="fa-solid fa-home" class="hover:text-amber-500 px-2" />
              <span class="hidden sm:block">Home</span>
            </a>
          </li>
          <li class="hover:cursor-pointer hover:text-amber-500 ">
            <a @click="scrollToSection('projects')" class="flex">
              <font-awesome-icon icon="fa-regular fa-images" class="hover:text-amber-500 px-2" />
              <span class="hidden sm:block">Projects</span>
            </a>
          </li>
          <li class="hover:cursor-pointer hover:text-amber-500  ">
            <a @click="scrollToSection('about')" class="flex">
              <font-awesome-icon icon="fa-solid fa-address-card" class="hover:text-amber-500 px-2" />
              <span class="hidden sm:block">About</span>
            </a>
          </li>
          <li class="hover:cursor-pointer hover:text-amber-500 ">
            <a @click="scrollToSection('contacts')" class="flex">
              <font-awesome-icon icon="fa-solid fa-envelope" class="hover:text-amber-500 px-2" />
              <span class="hidden sm:block">Contacts</span>
            </a>
          </li>
        </ul>
    </div>
</template>