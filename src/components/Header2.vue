<script setup lang="ts">
import DarkModeSwitch from './DarkModeSwitch.vue';
import LanguageSwitch from './LanguageSwitch.vue';
import Daisy from './Daisy.vue';
import { ref, computed, inject } from 'vue';
const store = inject('store')

</script>
<template>
    <div 
        class="fixed top-0 w-full h-10 bg-black/10 flex justify-between backdrop-blur-md"
        
    >
        <!-- logo -->
         <!-- TODO: on hover devient fleur barrée et on click devient grisée, efface toutes les daisy  -->
         <div class="flex font-poiret">
             <img src="../../public/img/daisy-logo.svg"/>
             <p class="text-3xl">Camille Hébert</p>
         </div>

        <!-- sections -->
        <ul class="flex justify-evenly basis-1/2 text-xl uppercase  transition-colors duration-1000"
         :class="store.isDarkMode ? 'text-slate-50':'text-slate-900'"
        >
          <li class="hover:cursor-pointer hover:text-amber-500 ">
            <a @click="scrollToSection('home')" class="flex">
              <font-awesome-icon icon="fa-solid fa-home" class="icon" />
              <span class="menu-item">Home</span>
            </a>
          </li>
          <li class="hover:cursor-pointer hover:text-amber-500 ">
            <a @click="scrollToSection('projects')" class="flex">
              <font-awesome-icon icon="fa-regular fa-images" class="icon" />
              <span class="menu-item">Projects</span>
            </a>
          </li>
          <li class="hover:cursor-pointer hover:text-amber-500  ">
            <a @click="scrollToSection('about')" class="flex">
              <font-awesome-icon icon="fa-solid fa-address-card" class="icon" />
              <span class="menu-item">About</span>
            </a>
          </li>
          <li class="hover:cursor-pointer hover:text-amber-500 ">
            <a @click="scrollToSection('contacts')" class="flex">
              <font-awesome-icon icon="fa-solid fa-envelope" class="icon" />
              <span class="menu-item">Contacts</span>
            </a>
          </li>
        </ul>

        <!-- options -->
        <div class="flex">
            <DarkModeSwitch  v-model="store.isDarkMode"/>
            <LanguageSwitch  v-model="store.isTranslated" />
        </div>
    </div>
</template>
<style>
    .icon{
        @apply  px-2 sm:hidden
    }
    .menu-item{
        @apply hidden sm:block
    }
</style>