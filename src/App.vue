<script setup>
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contacts from './components/Contacts.vue';
import Animation from './components/Animation.vue';
</script>

<template>
  <div class="bg-gradient-to-bl from-orange-200 to-purple-200">
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
