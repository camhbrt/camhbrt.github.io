<script setup>
</script>

<template>
    <div  id="home" class=" text-fuchsia-950 justify-evenly lg:flex lg:h-screen lg:py-20 lg:mx-20 mx-6 ">
        <div class="p-10 flex flex-col justify-evenly">
            <p class="self-center xl:text-6xl lg:text-5xl text-4xl leading-loose text-center">
                Hi, I'm Camille Hébert
            </p>
            <p class="self-center xl:text-3xl lg:text-2xl text-1xl  text-center font-light">
                Web / mobile developer looking for an apprenticeship <br/> starting this October. Welcome to my portfolio !
            </p>
            <div class="flex justify-center">

                <p class="self-center xl:text-3xl lg:text-2xl text-xl leading-loose text-center font-love text-rose-600">
                    my resume : 
                </p>
                <a href="assets/CV_Camille_Hebert_DeveloppeuseWeb.pdf" download="CV_Camille_Hebert_DeveloppeuseWeb.pdf">
                    <font-awesome-icon 
                    icon="fa-solid fa-download"
                    size="2x"
                    class="hover:text-rose-600 px-2" />
                </a>
            </div>
        </div>
        <img src="/img/photo.jpg" 
            alt="My Image"
            id="profilepicture"
            class="object-cover  h-auto mx-auto "  
        />
    </div>
</template>
