<script setup>
  import Title from '../components/Title.vue';
  import data from './../data';
</script>

<template>
  <div id="about" class=" text-fuchsia-950 lg:mx-20 py-6"> <!--m-20-->
    <Title :title="'About me'"/>
    <div class="font-light md:flex md:flex-row-reverse"><!--flex -->
      
      <div id="colonne droite" class="flex flex-col mx-auto justify-between lg:justify-around">

        <p id="biography" class="text-justify lg:text-xl mb-6 xs:w-80 xs:mx-auto lg:w-auto lg:pl-20">I used to be a middle school music teacher for six years, but I decided to exchange the language of music for the language of programming, and now I have developed a strong enthusiasm for the creative potential offered by software devlopment. <br/><br/>I am currently studying at Ada Tech School, the first feminist and inclusive programming school in Paris, with a pedagogy focused on hands-on practice.</p><!-- text-center lg:w-3/5 lg:pt-20 lg:text-2xl-->
        
        <div id="ligne 2" class="lg:flex lg:flex-row-reverse lg:justify-between xl:pl-20 xl:justify-evenly">

          <div id="parcours" class="rounded-3xl bg-fuchsia-950/10 p-4 mb-6 xs:w-80 mx-auto xl:mx-0 xl:mb-0">
            <div id="formation" class="pb-4">
              <p class="font-extrabold uppercase text-center">Education</p>
              <ul class="pl-4">
                <li><font-awesome-icon icon="fa-solid fa-computer" class="text-rose-600 pr-2" /> Ada Tech School</li>
                <li><font-awesome-icon icon="fa-solid fa-music" class="text-rose-600 pr-2" /> Master MEEF Musique</li>
                <li><font-awesome-icon icon="fa-solid fa-flask-vial" class="text-rose-600 pr-2" /> Baccalauréat scientifique</li>
              </ul>
            </div>  
            <div id="expérience">
              <p class="font-extrabold uppercase text-center">Experience</p>
              <ul class="pl-4 leading-none">
                <li class="pb-2">
                  Music teacher<br/>
                  <span class="text-rose-600 text-sm font-semibold">2017-2023</span>
                </li>
                <li>
                  Assistant manager<br/>
                  <span class="text-rose-600 text-sm font-semibold">2013-2016</span >
                </li>
              </ul>
            </div>
          </div>
        
          <div id="coordonnées" class="flex flex-col my-6 leading-loose lg:border lg:rounded-3xl lg:border-rose-600 lg:p-2 md:hidden xl:block">
            <p class="font-extrabold uppercase text-center">contact information</p>
            <ul class="text-center">
              <li><font-awesome-icon icon="fa-solid fa-location-dot" class="" /> Paris, France</li>
              <li><font-awesome-icon icon="fa-solid fa-at" class="" /> camille.hebert22@gmail.com</li>
              <li><font-awesome-icon icon="fa-solid fa-phone" class="" /> 06.84.40.81.25</li>
              <li>
                <a href="https://github.com/camhbrt" target="_blank" class="hover:text-rose-600"><font-awesome-icon icon="fa-brands fa-github" class="" /> /camhbrt</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/camille-hebert-dev/" target="_blank" class="hover:text-rose-600"><font-awesome-icon icon="fa-brands fa-linkedin" class="" /> /camille-hebert-dev</a>
              </li>
            </ul>
          </div>
        
        </div>

      </div>

      <div class="mx-auto xl:flex xl:flex-col xl:justify-end">

        <div id="compétences" class=" bg-fuchsia-950/10 rounded-3xl p-2 flex flex-col xs:w-80 mx-auto h-max">
          <div id="Hard skills" class="py-2">
            <p class="font-extrabold uppercase text-center">hard skills</p>
            <div class="flex flex-wrap justify-between">
              <div 
                v-for="(skill, index) in data.skills" 
                :key="index"
                class="flex flex-col items-center m-2">
                <p>{{ skill.name }}</p>
                <p v-html="skill.icon" class="w-12"></p>
              </div>
            </div>
          </div>
          <div id="Soft skills">
            <p class="font-extrabold uppercase text-center">soft skills</p>
            <ul class="text-center m-4">
              <li><font-awesome-icon icon="fa-solid fa-rotate" class="text-rose-600" /> Adaptability</li>
              <li><font-awesome-icon icon="fa-solid fa-users" class="text-rose-600" /> Social intelligence</li>
              <li><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-rose-600" /> Attention to detail</li>
              <li><font-awesome-icon icon="fa-solid fa-hand-holding-heart" class="text-rose-600" /> Humility</li>
              <li><font-awesome-icon icon="fa-solid fa-bolt" class="text-rose-600" /> Perseverance</li>
            </ul>
          </div> 
        </div>


        <div id="coordonnées" class="md:flex flex-col my-6 leading-loose   lg:p-2 hidden  xl:hidden">
          <p class="font-extrabold uppercase text-center">Contact information</p>
          <ul class="text-center">
            <li><font-awesome-icon icon="fa-solid fa-location-dot" class="" /> Paris, France</li>
            <li><font-awesome-icon icon="fa-solid fa-at" class="" /> camille.hebert22@gmail.com</li>
            <li><font-awesome-icon icon="fa-solid fa-phone" class="" /> 06.84.40.81.25</li>
            <li>
              <a href="https://github.com/camhbrt" target="_blank" class="hover:text-rose-600"><font-awesome-icon icon="fa-brands fa-github" class="" /> /camhbrt</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/camille-hebert-dev/" target="_blank" class="hover:text-rose-600"><font-awesome-icon icon="fa-brands fa-linkedin" class="" /> /camille-hebert-dev</a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>