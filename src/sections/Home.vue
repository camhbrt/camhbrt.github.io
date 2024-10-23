<script setup>
</script>

<template>
    <div  id="home" class=" text-cyan-100 justify-evenly pb-10 sm:pt-10 md:flex lg:pr-20 lg:h-screen">
        <div class="flex flex-col justify-evenly py-10 lg:pl-10 ">
            <h1 
                class="text-4xl text-center pb-6 md:text-5xl lg:text-6xl xl:text-7xl font-poiret">
                Hi, I'm Camille Hébert
            </h1>
            <p class=" font-poiret text-xl self-center text-center font-light sm:w-3/4 xl:text-3xl lg:text-2xl xl:leading-relaxed lg:leading-relaxed md:leading-relaxed ">
                Web developer & front-end enthusiast, welcome to my portfolio !
            </p>
            <div class="flex justify-center mt-4"> <!---->
                <a 
                    href="assets/CV_Camille_Hebert_DeveloppeuseWeb.pdf" 
                    download="CV_Camille_Hebert_DeveloppeuseWeb.pdf"
                    class="flex justify-center my-2 rounded-full p-2 shadow-lg bg-slate-950 border border-cyan-100 text-cyan-100  hover:border-amber-500 hover:text-amber-500 active:tracking-wide active:border-amber-500 ">
                    Download my resume
                    <font-awesome-icon icon="fa-solid fa-download" class="px-2 py-1" />
                </a>
            </div>
        </div>
        <div class="flex justify-center md:flex-none">
            <img src="/img/photo.jpg" 
            alt="My Image"
            id="profilepicture"
            class="object-cover justify-center my-auto"  
            />
        </div>
    </div>
</template>
