<script>   
    export default {
      methods: {
        scrollToSection(sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        },
      },
    };
</script>

<template>
    <div  class="font-poiret uppercase flex pt-4 fixed w-screen z-50 backdrop-blur-lg">
        <ul class="flex justify-evenly basis-10/12 text-2xl">
          <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('home')">Home</a></li>
          <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('about')">About</a></li>
          <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('projects')">Projects</a></li>
          <li class="hover:cursor-pointer hover:text-rose-600"><a @click="scrollToSection('contacts')">Contacts</a></li>
        </ul>


        <div class="flex">

          <a href="https://github.com/camhbrt" target="_blank">
            <svg 
              id="github"
              xmlns="http://www.w3.org/2000/svg" 
              width="37px" 
              height="36px" 
              viewBox="0 0 36 36"
              class="svg-fill">
              <path d="M 17.945312 0 C 8.023438 0 0 8.25 0 18.457031 C 0 26.613281 5.140625 33.519531 12.269531 35.964844 C 13.164062 36.148438 13.488281 35.566406 13.488281 35.078125 C 13.488281 34.652344 13.460938 33.183594 13.460938 31.65625 C 8.46875 32.757812 7.429688 29.457031 7.429688 29.457031 C 6.625 27.316406 5.4375 26.769531 5.4375 26.769531 C 3.804688 25.636719 5.554688 25.636719 5.554688 25.636719 C 7.367188 25.757812 8.320312 27.53125 8.320312 27.53125 C 9.925781 30.34375 12.507812 29.546875 13.550781 29.058594 C 13.695312 27.867188 14.171875 27.042969 14.679688 26.585938 C 10.695312 26.15625 6.507812 24.566406 6.507812 17.476562 C 6.507812 15.460938 7.21875 13.8125 8.347656 12.527344 C 8.171875 12.070312 7.546875 10.175781 8.527344 7.640625 C 8.527344 7.640625 10.042969 7.148438 13.460938 9.535156 C 14.921875 9.128906 16.429688 8.925781 17.945312 8.921875 C 19.460938 8.921875 21.007812 9.136719 22.433594 9.535156 C 25.851562 7.148438 27.363281 7.640625 27.363281 7.640625 C 28.347656 10.175781 27.722656 12.070312 27.542969 12.527344 C 28.703125 13.8125 29.386719 15.460938 29.386719 17.476562 C 29.386719 24.566406 25.195312 26.125 21.183594 26.585938 C 21.839844 27.164062 22.402344 28.265625 22.402344 30.007812 C 22.402344 32.480469 22.375 34.46875 22.375 35.078125 C 22.375 35.566406 22.699219 36.148438 23.589844 35.964844 C 30.722656 33.519531 35.863281 26.613281 35.863281 18.457031 C 35.890625 8.25 27.839844 0 17.945312 0 Z M 17.945312 0 "/>
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/camille-hebert-dev/" target="_blank">
            <svg 
              id="linkedin"
              xmlns="http://www.w3.org/2000/svg" 
              width="36" 
              height="36" 
              viewBox="0 0 24 24"
              class="svg-fill mx-4">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <a href="public/assets/CV_Camille_Hebert_DeveloppeuseWeb.pdf" download="CV_Camille_Hebert_DeveloppeuseWeb.pdf">
            <svg 
              id="cv"
              xmlns="http://www.w3.org/2000/svg" 
              width="53" 
              height="54" 
              style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
              viewBox="0 0 36 36"
              class="svg-fill">
              <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/>
            </svg>
          </a>
        </div>

    </div>
</template>