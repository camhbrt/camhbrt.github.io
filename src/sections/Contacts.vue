<script setup>
import Title from '../components/Title.vue';
</script>

<template>
  <div id="contacts" class=" text-cyan-100 py-6">
    <Title :title="'Contacts'"/>
    <p class="text-lg font-light pb-2 md:text-center lg:text-xl">
      Feel free to reach out to me via the form below to discuss further, or connect with me on Linkedin :
      <a href="https://www.linkedin.com/in/camille-hebert-dev/" target="_blank">
        <font-awesome-icon icon="fa-brands fa-linkedin" class="hover:text-amber-500"/>
      </a>
    </p>
        
    <form 
      action="https://formspree.io/f/maygjgqo" 
      method="POST" 
      class="border rounded-3xl border-cyan-100 bg-neutral-50/5 lg:w-1/2 md:w-2/3 mx-auto " >
      <div class="flex flex-col">
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="name" 
          required 
          class="mx-6 mt-6 p-1 rounded-lg border bg-transparent border-cyan-100 font-sans"
        >
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="e-mail" 
          required 
          class="m-6 p-1 rounded-lg border bg-transparent border-cyan-100 font-sans "
        >
        <textarea 
          id="message" 
          name="message" 
          placeholder="message content" 
          rows="6" 
          required 
          class="mx-6 p-1 rounded-lg border bg-transparent border-cyan-100 font-sans"
        />
      </div>
      <div class="flex justify-end">
        <button 
          type="submit" 
          class="py-2 w-20 m-4 font-medium rounded-xl shadow-lg border border-cyan-100 text-cyan-100 hover:border-amber-500 hover:text-amber-500"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>