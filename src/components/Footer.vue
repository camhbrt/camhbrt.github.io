<script setup>
</script>

<template>
    <div>
        <div  class=" bg-neutral-950/75 py-4 text-center text-sm text-neutral-100 font-sans flex justify-between flex-col sm:flex-row">
            <div></div>

            <div>
                <p class=" ">© 2024 Camille Hébert. All rights reserved </p>
                <p class="">Portfolio created with Vue.js and TailwindCSS</p>
            </div>


            <div class="flex pr-4 justify-center pt-2">

                <a href="https://github.com/camhbrt" target="_blank">
                <font-awesome-icon 
                icon="fa-brands fa-github"
                size="2x"
                class="hover:text-rose-600 px-2" />
                </a>

                <a href="https://www.linkedin.com/in/camille-hebert-dev/" target="_blank">
                <font-awesome-icon 
                icon="fa-brands fa-linkedin"
                size="2x"
                class="hover:text-rose-600 px-2" />
                </a>

                <a href="assets/CV_Camille_Hebert_DeveloppeuseWeb.pdf" download="CV_Camille_Hebert_DeveloppeuseWeb.pdf">
                <font-awesome-icon 
                icon="fa-solid fa-file-pdf"
                size="2x"
                class="hover:text-rose-600 px-2" />
                </a>
            </div>
        </div>
        <div class="bg-none h-14 sm:hidden"></div>
    </div>
</template>