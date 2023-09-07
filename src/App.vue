<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contacts from './components/Contacts.vue';
</script>

<template>
  <div class="bg-gradient-to-bl from-orange-200 to-purple-300 h-full">
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contacts/>
    <Footer/>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>
