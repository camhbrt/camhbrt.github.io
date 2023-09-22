<script setup>
</script>

<template>
    <div id="contacts" class=" text-fuchsia-950 justify-evenly lg:py-20 lg:mx-20 mx-6 ">
      <div class="">
        <p class="lg:text-5xl text-4xl">Contacts</p>
        <p class="text-2xl py-6 font-light">Feel free to send me an email to discuss further</p>
      </div>

      <form 
        action="https://formspree.io/f/maygjgqo" 
        method="POST" 
        class=" border border-fuchsia-950 lg:p-6 lg:w-1/2 mx-auto rounded-3xl lg:mb-32 bg-neutral-50/40" >
        <div class="flex flex-col">
          <input type="text" id="name" name="name" placeholder="name" required class="m-4 p-1 rounded-lg border border-fuchsia-950 ">
          <input type="email" id="email" name="email" placeholder="e-mail" required class="m-4 p-1 rounded-lg border border-fuchsia-950 ">
          <textarea id="message" name="message" placeholder="message content" rows="6" required class="m-4 p-1 rounded-lg border border-fuchsia-950 "></textarea>
        </div>
        <div class="flex justify-end">
          <button type="submit" class="py-2 w-20 m-4 font-medium rounded-xl bg-fuchsia-950 text-purple-100 hover:bg-fuchsia-950/80 active:tracking-wide active:bg-fuchsia-950">Send</button>
        </div>
      </form>
    </div>
</template>