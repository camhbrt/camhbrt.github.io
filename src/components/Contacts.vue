<script setup>
    console.log("voici la partie Contacts")
</script>

<template>
    <div id="contacts" class=" text-fuchsia-950 m-16">
      <div class="px-20">
        <p class="font-poiret text-3xl uppercase">Contacts</p>
        <p class="font-poiret text-3xl py-6">Feel free to send me an e-mail to discuss further</p>
      </div>
      <form action="https://formspree.io/f/your-form-id" method="POST" class=" border border-fuchsia-950 p-6 w-1/2 mx-auto rounded-3xl " >
        <div class="flex flex-col">
          <input type="text" id="name" name="name" placeholder="name" required class="m-4 p-1 rounded-lg border border-fuchsia-950 ">
          <input type="email" id="email" name="email" placeholder="e-mail" required class="m-4 p-1 rounded-lg border border-fuchsia-950 ">
          <textarea id="message" name="message" placeholder="message content" rows="6" required class="m-4 p-1 rounded-lg border border-fuchsia-950 "></textarea>
        </div>
        <div class="flex justify-end">
          <button type="submit" class="py-2 px-8 m-4 rounded-xl border border-fuchsia-950 bg-fuchsia-950 text-orange-200 active:bg-rose-600">Send</button>
        </div>
      </form>
    </div>
</template>