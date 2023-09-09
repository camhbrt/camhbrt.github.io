<script setup>
</script>

<template>
    <div id="contacts" class=" text-fuchsia-950 m-10">
      <div class="px-20">
        <p class="font-poiret text-5xl py-20">Feel free to send me an e-mail to discuss further</p>
      </div>
      <form action="https://formspree.io/f/your-form-id" method="POST" class=" border border-fuchsia-950 p-6 w-1/2 mx-auto rounded-3xl mb-32 bg-neutral-50/40" >
        <div class="flex flex-col">
          <input type="text" id="name" name="name" placeholder="name" required class="m-4 p-1 rounded-lg border border-fuchsia-950 ">
          <input type="email" id="email" name="email" placeholder="e-mail" required class="m-4 p-1 rounded-lg border border-fuchsia-950 ">
          <textarea id="message" name="message" placeholder="message content" rows="6" required class="m-4 p-1 rounded-lg border border-fuchsia-950 "></textarea>
        </div>
        <div class="flex justify-end">
          <button type="submit" class="py-2 px-8 m-4 rounded-xl border  bg-fuchsia-950 text-orange-200 hover:bg-rose-600 active:text-orange-50">Send</button>
        </div>
      </form>
    </div>
</template>