<script setup>
import Navbar from './components/Navbar.vue';
import Home from './sections/Home.vue';
import Footer from './components/Footer.vue';
import About from './sections/About.vue';
import Projects from './sections/Projects.vue';
import Contacts from './sections/Contacts.vue';
import Animation from './components/Animation.vue';
import Banner from './components/Banner.vue'
</script>

<template>
  <div class="bg-gradient-to-bl from-orange-200 to-purple-200">
    <Banner />
    <Navbar class="flex"/>
    <div class="font-outfit px-6">
      <Home/>
      <Animation/>
      <Projects/>
      <Animation/>
      <About/>
      <Animation/>
      <Contacts/>
    </div>
    <Footer/>
  </div>
</template>
