<template>
    <div class="scroll-container mt-4" ref="scrollContainer">
      <!-- SVG avec le chemin à animer -->
      <svg 
        class="svg-animation" 
        viewBox="0 0 573 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid slice"
      >
        <path 
          ref="path" 
          class="path-animation" 
          :d="pathData" 
          stroke="#e11d48"
          stroke-width="2" 
          fill="none"
          :style="{ strokeDasharray: pathLength , strokeDashoffset: pathLength }"
          
        />
      </svg>
    </div>
  </template>
  
  <script>

  export default {

    data() {
      return {
        pathLength: 0, // Variable pour stocker la longueur totale du chemin SVG
        pathData: "M1 33C17.6667 25.1667 58.2 11.1 87 17.5C123 25.5 150 57.5 180.5 55.5C211 53.5 242.5 31 275.5 27.5C308.5 24 318.5 56.5 335.5 59C352.5 61.5 463 36 468 11.5C473 -13 540.5 9 536.5 27.5C533.3 42.3 541.5 36 546 31L541.5 25C538.5 23.1667 532.3 20.8 531.5 26C530.7 31.2 534.5 36.8333 536.5 39C540 42.1667 548 48 552 46C556 44 566.333 40.5 571 39C570.5 38.8333 569.4 39.4 569 43C568.5 47.5 560.5 53.6202 555 50C549.5 46.3798 546.5 41 547.5 40C548.5 39 550 34 562 37C574 40 558 38 572 38.5",
      };
    },

    mounted() {
      this.calculatePathLength(); // Calcule la longueur totale du chemin SVG
      window.addEventListener("scroll", this.handleScroll); // Ajoute un écouteur d'événements de défilement
    },

    methods: {
      calculatePathLength() {
        // Fonction pour calculer la longueur totale du chemin SVG
        const path = this.$refs.path;
        this.pathLength = path.getTotalLength();
      },

      handleScroll() {
        // Fonction appelée lors du défilement de la page
        const scrollContainer = this.$refs.scrollContainer;
        const scrollContainerTop = scrollContainer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        // Vérifie si la div est visible dans la fenêtre et défile à travers les 200 pixels de sa hauteur
        if (scrollContainerTop < windowHeight && scrollContainerTop + 200 > 0) {
          let scrollPercentage = (windowHeight - scrollContainerTop) / (windowHeight + 200) *2;
          scrollPercentage = Math.min(scrollPercentage, 1);
          const drawLength = this.pathLength * scrollPercentage;
          this.$refs.path.style.strokeDashoffset = this.pathLength - drawLength;
        }
      },
    },
  };
  </script>
  
  <style>
  .scroll-container {
    /* height: 130px; Hauteur fixe de la div */
    overflow: hidden; /* Empêche le défilement de la div elle-même */
    position: relative; /* Assurez-vous que la position est relative pour calculer la position par rapport à la fenêtre */
  }
  </style>
  