<script setup>
  import Title from './Title.vue';
  import data from '../data';
</script>

<template>
  <div id="about" class=" text-fuchsia-950 m-4 "> <!--m-20-->
    <Title :title="'About me'"/>
    <div class="font-light"><!--flex -->
      
      <div id="colonne 2" class="">
        <p id="biography" class="text-justify">I used to be a middle school music teacher for six years, but I decided to exchange the language of music for the language of programming, and now I have developed a strong enthusiasm for the creative potential offered by software devlopment. <br/><br/>I am currently studying at Ada Tech School, the first feminist and inclusive programming school in Paris, with a pedagogy focused on hands-on practice.</p><!-- text-center lg:w-3/5 lg:pt-20 lg:text-2xl-->
        
        <div id="compétences" class="bg-fuchsia-950/10 rounded-3xl p-2 ">
          
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
              <li><font-awesome-icon icon="fa-solid fa-rotate" class="text-rose-600" /> Adaptabilité</li>
              <li><font-awesome-icon icon="fa-solid fa-users" class="text-rose-600" /> Intelligence sociale</li>
              <li><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-rose-600" /> Soucis du détail</li>
              <li><font-awesome-icon icon="fa-solid fa-hand-holding-heart" class="text-rose-600" /> Humilité</li>
              <li><font-awesome-icon icon="fa-solid fa-bolt" class="text-rose-600" /> Persévérance</li>
            </ul>
          </div>

        </div>
        
        <div id="coordonnées" class="flex flex-col justify-center items-center my-4">
          <p><font-awesome-icon icon="fa-solid fa-location-dot" class="" /> paris, france</p>
          <p><font-awesome-icon icon="fa-solid fa-at" class="" /> camille.hebert22@gmail.com</p>
          <p><font-awesome-icon icon="fa-solid fa-phone" class="" /> 06.84.40.81.25</p>
          <a href="https://www.linkedin.com/in/camille-hebert-dev/" target="_blank" class="hover:text-rose-600"><font-awesome-icon icon="fa-brands fa-linkedin" class="" /> /camille-hebert-dev</a>
          <a href="https://github.com/camhbrt" target="_blank" class="hover:text-rose-600"><font-awesome-icon icon="fa-brands fa-github" class="" /> /camhbrt</a>
        </div>

      </div>

      <div id="colonne 1" class="bg-fuchsia-950/10 rounded-3xl p-2 m-6">

        <div id="formation" class="pb-4">
          <p class="font-extrabold uppercase text-center">Formation</p>
          <ul class="pl-4">
            <li>
              <font-awesome-icon icon="fa-solid fa-computer" class="text-rose-600 pr-2" />
              Ada Tech School
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-music" class="text-rose-600 pr-2" />
              Master MEEF Musique
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-flask-vial" class="text-rose-600 pr-2" />
               Baccalauréat scientifique
              </li>
          </ul>
        </div>
        
        <div id="expérience">
          <p class="font-extrabold uppercase text-center">Expérience</p>
          <ul class="pl-4 leading-none">
            <li class="pb-2">Professeure d'éducation musicale <br/><span class="text-rose-600 text-sm font-semibold">2017-2023</span></li>
            <li>Chargée de dépôt<br/><span class="text-rose-600 text-sm font-semibold">2013-2016</span ></li>
          </ul>
        </div>

      </div>
      
    </div>
  </div>
</template>