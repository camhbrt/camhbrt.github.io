<script setup>
import Title from './Title.vue';
</script>

<template>
  <div id="contacts" class=" text-fuchsia-950 py-6"><!--lg:py-20 lg:mx-20 mx-6 justify-evenly -->
    <Title :title="'Contacts'"/>
    <p class="text-lg font-light pb-2 lg:text-center lg:text-xl">
      Feel free to reach out to me via the form below to discuss further, or connect with me on Linkedin :
      <a href="https://www.linkedin.com/in/camille-hebert-dev/" target="_blank">
        <font-awesome-icon icon="fa-brands fa-linkedin" class="hover:text-rose-600"/>
      </a>
    </p><!---->
        
    <form 
      action="https://formspree.io/f/maygjgqo" 
      method="POST" 
      class="border rounded-3xl border-fuchsia-950 bg-neutral-50/40 lg:w-1/2 mx-auto " ><!--lg:p-6 lg:w-1/2 lg:mb-32 mx-auto-->
      <div class="flex flex-col"><!---->
        <input type="text" id="name" name="name" placeholder="name" required class="mx-6 mt-6 p-1 rounded-lg border border-fuchsia-950 font-sans"><!---->
        <input type="email" id="email" name="email" placeholder="e-mail" required class="m-6 p-1 rounded-lg border border-fuchsia-950 font-sans "><!---->
        <textarea id="message" name="message" placeholder="message content" rows="6" required class="mx-6 p-1 rounded-lg border border-fuchsia-950 font-sans"></textarea><!---->
      </div>
      <div class="flex justify-end"><!---->
        <button type="submit" class="py-2 w-20 m-4 font-medium rounded-xl shadow-lg bg-fuchsia-950 text-purple-100 hover:bg-fuchsia-950/80 active:tracking-wide active:bg-fuchsia-950">Send</button><!---->
      </div>
    </form>
  </div>
</template>