const projects = [
    { 
      title: "Mystery Quest", 
      img:"./img/mystery-mini.png",
      tags: "react-native · express.js · mySQL",
      descriptionFR: "Mystery Quest est une application mobile de chasse au trésor via géolocalisation.  Dans ce projet, j'ai participé à la conception de la maquette, codé l'interface graphique de certaines vues, créé le serveur, créé les routes et les contrôleurs pour afficher les quêtes à partir de la base de données, assurer le suivi de la quête en fonction de la géolocalisation et gérer l'affichage des scores.",
      description:"Mystery Quest is a mobile application for treasure hunting through geolocation. In this project, I contributed to the design of the prototype, coded the graphical interface for certain views, set up the server, created the routes and controllers to display quests from the database, implemented quest tracking based on geolocation, and managed the display of scores.",
      date: "September 2023",
      stack: "React-native | Expo | Node.JS | Express | mysql",
      tools: "Figma, Notions, Git, Github, VSCode, Slack",
      authors: "Camille Hébert, Alan Kalkan, Sayadyna Mehraik",
      length: "4 semaines",
      github:"https://github.com/camhbrt/MysteryQuest",
      fullstack:true,
      js:true,
      team:true
    }, 
    { 
      title: "Pawpawpaw", 
      img:"./img/pawpawpaw-mini.png" ,
      tags: "PHP · laravel · postgreSQL",
      descriptionFR: "Pawpawpaw est un réseau social de partage de photographie (à la manière d'instagram).  Durant ce projet, nous avons presque tout fait en pair-programming (créer la base de donnée, le CRUD) . Je me suis néanmoins occupée de concevoir la maquette, et de réaliser la page qui affiche tous les posts d'un utilisateur",
      description:"Pawpawpaw is a photo-sharing social network, similar to Instagram. During this project, we did almost everything in pair programming, including creating the database and implementing CRUD operations. However, I was responsible for designing the prototype and developing the page that displays all of a user's posts.",
      date: "August 2023",
      stack: "PHP | Laravel | PostgreSQL | Eloquent",
      tools: "Docker, Figma, Git, Github, VSCode, Slack",
      authors: "Camille Hébert, Thomas Saïag, Bintou Traoré",
      length: "2 semaines",
      github:"https://github.com/camhbrt/pawpawpaw",
      fullstack:true,
      js:false,
      team:true
    },
    { 
      title: "Archi-design", 
      img:"./img/maelle-mini.png" ,
      tags: "react.js · tailwind",
      descriptionFR: "Site-vitrine pour une étudiante en architecture d'intérieur et design. Nous avons établi ensemble le cahier des charges, tant pour l'architecture générale du portfolio que pour le design de l'interface. Je lui ai présenté une maquette, puis après quelques ajustements, j'ai réalisé ce portfolio en utilisant react",
      description:"This is a portfolio for a student in architecture and design. We defined the project requirements together, both for the website's architecture and the interface design. I presented her with a prototype, and after some minor adjustments, I completed the portfolio on my own.",
      date: "July 2023 (in progress)",
      stack: "React.JS | Tailwind",
      tools: "Figma, Git, Github, VSCode",
      authors: "Camille Hébert",
      github:"https://github.com/camhbrt/archi-design",
      fullstack:false,
      js:true,
      team:false
    },
    { 
      title: "Around the meuble", 
      img:"./img/meuble-mini.png" ,
      tags: "react.js · express.js · sequelize",
      descriptionFR: "Ceci est un site de e-commerce de vente de meuble. Le principe était de travailler en sein d'une équipe de 9 personnes divisée en deux groupes. J'étais dans le groupe qui travaillait sur la partie front-end la première semaine, puis je continuais le travail commencé par l'autre équipe en back-end lors de la deuxième semaine. J'ai donc travaillé sur la maquette du site, créé l'architecture générale de la partie front-end avec la navigation, et la vue de détail d'un meuble. Sur la partie back, j'ai rajouté des controllers en fonction des demandes de l'équipe front.",
      description: "This is an e-commerce website for furniture sales, and it is my first project involving a back-end. We had to work within a team of nine people, divided into two groups. My group was responsible for the front-end during the first week. Then, in the second week, I continued the work initiated by the other team on the back-end. During this project, my tasks included creating the website's design, establishing the overall front-end architecture with navigation, and designing the detailed view for furniture items. On the back-end, I added controllers required by the front-end team.",
      date: "June 2023",
      stack: "React | Tailwind | Node.js | Express | Sequelize",
      tools: "Docker, Figma, Git, Github, VSCode, Slack",
      authors: "C. Badin, H. Belhamidi, B. Dromard, C. Hébert, S. Mehraik, M. Phémius, C. Salazar, B. Traoré et J-J. Valmont",
      length: "2 semaines" ,
      github:"https://github.com/camhbrt/around_the_meuble",
      fullstack:true,
      js:true,
      team:true
    },
    { 
      title: "Motivational quotes", 
      img:"https://picsum.photos/400" ,
      tags:"HTML · CSS · javascript · node.js · express.js · mongodb" ,
      descriptionFR: "Ceci est une extension chrome qui affiche des citations aléatoires quand on survole une icône afin de se remotiver. Comme nous avons réussi à implémenter cela très rapidement, donc nous avons décidé de faire un premier essai d'API et de créer une base de données de citations pour avoir un premier aperçu  du développement back-end",
      description: "This is a Chrome extension that displays random quotes when you hover an icon to provide motivational inspiration. Since we were able to implement this quickly, we decided to take our first shot at creating an API and a database of quotes to get a preliminary glimpse into back-end development.",
      date: "May 2023",
      stack: "html | css | Javascript | Node.js | Express | Mongo db",
      tools: "Git, Github, VSCode, Trello, Slack",
      authors: "Camille Hébert, Steve Mafoa, Clara Salazar",
      length: "2 semaines" ,
      github:"https://github.com/camhbrt/Motivational-quotes",
      fullstack:true,
      js:true,
      team:true
    },
    { 
      title: "Dataviz SNCF", 
      img:"./img/dataviz-mini.png" ,
      tags:"HTML · CSS · javascript" ,
      descriptionFR: "Ceci est une interface web qui affiche des données issues de l'API de la SNCF. Je me suis amusée à créer le logo et le design du site en m'inspirant de la charte graphique de la SNCF, et je me suis chargée d'afficher les lignes de train disponibles dans chaque gare.",
      description: "This is a web interface that displays data from the SNCF API. I had fun creating the logo and website design, drawing inspiration from the SNCF's visual identity guidelines. Additionally, I was responsible for presenting the available train lines at each station.",
      date: "March 2023",
      stack: "html | css | Javascript | Bootstrap |",
      tools: "Git, Github, VSCode, Trello, Slack",
      authors: "Camille Hébert, Mischaël Phémius, Guillaume Pagès",
      length: "2 semaines" ,
      github:"https://github.com/camhbrt/dataviz-sncf",
      fullstack:false,
      js:true,
      team:true
    },
    { 
      title: "Amelia's Castle", 
      img:"./img/amelias-mini.png" ,
      tags:"pico-8 · LUA" ,
      descriptionFR: "Jeu sur console virtuelle de type platformer. <a href='https://www.lexaloffle.com/bbs/?pid=130039'> Cliquez ici </a> pour l'essayer",
      description: "This is my very first development project. It's a platformer-style game designed for the PICO-8 virtual console. You can try it <a href='https://www.lexaloffle.com/bbs/?pid=130039'> here </a>",
      date: "February 2023",
      stack: "lua",
      tools: "VSCode, Trello, Slack",
      authors: "Laure Favre, Camille Hébert, Sayadyna Mehraik, Djeneba Soumare",
      length: "2 semaines",
      github:"https://github.com/camhbrt/amelias_castle",
      fullstack:false,
      js:false,
      team:true
    },
  ];

  const skills = [
    {
      name:"HTML",
      icon:`<svg viewBox="-1 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#4a044e" stroke="#4a044e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>html [#124]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill="#4a044e"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" id="html-[#124]"> </path> </g> </g> </g> </g></svg>`
    },
    {
      name:"CSS",
      icon:`<svg fill="#4a044e" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#4a044e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b001b19"> <path display="inline" d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302 H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606 l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062 l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"> </path> </g> </g></svg>`
    },
    {
      name:"JavaScript",
      icon:`<svg fill="#4a044e" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#4a044e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e75c7"> <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958 c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918 C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938 c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857 c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458 c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917 c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822 c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425 c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511 c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969 c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344 C433.706,340.486,474.331,355.693,470.696,409.917z"> </path> </g> </g></svg>`
    },
    {
      name:"PHP",
      icon:`<svg fill="#d3aad9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-51.2" y="-51.2" width="614.40" height="614.40" rx="122.88" fill="#4a044e" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e39be"> <path display="inline" d="M171.844,204.374c-11.137-12.748-28.856-19.123-53.146-19.123H37.96L0.5,377.99h41.984l9.96-51.241 h35.963c15.869,0,28.923-1.663,39.173-5.003c10.247-3.33,19.562-8.92,27.945-16.767c7.037-6.467,12.725-13.599,17.087-21.4 c4.354-7.797,7.448-16.401,9.278-25.812C186.333,234.919,182.98,217.124,171.844,204.374z M138.493,254.823 c-2.903,14.917-8.492,25.563-16.775,31.941c-8.288,6.38-20.897,9.569-37.822,9.569H58.354l15.678-80.667H102.8 c15.952,0,26.582,2.943,31.896,8.832C140.006,230.39,141.275,240.497,138.493,254.823z M337.828,237.059l-17.429,89.69h-42.317 l16.572-85.278c1.884-9.702,1.193-16.32-2.084-19.847c-3.272-3.529-10.242-5.296-20.9-5.296h-33.289l-21.458,110.421h-41.656 l37.46-192.739h41.656l-9.959,51.241h37.111c23.346,0,39.452,4.077,48.317,12.218C338.718,205.615,341.371,218.813,337.828,237.059 z M499.554,204.374c-11.137-12.748-28.856-19.123-53.142-19.123h-80.738l-37.46,192.739h41.984l9.96-51.241h35.963 c15.869,0,28.918-1.663,39.169-5.003c10.247-3.33,19.562-8.92,27.945-16.767c7.036-6.467,12.729-13.599,17.088-21.4 c4.354-7.797,7.447-16.401,9.277-25.812C514.042,234.919,510.694,217.124,499.554,204.374z M466.206,254.823 c-2.902,14.917-8.491,25.563-16.779,31.941c-8.284,6.38-20.896,9.569-37.822,9.569h-25.537l15.678-80.667h28.765 c15.952,0,26.581,2.943,31.899,8.832C467.72,230.39,468.984,240.497,466.206,254.823z"> </path> </g> </g></svg>`
    },
    {
      name:"React",
icon:`
  <svg fill="#d3aad9" viewBox="-51.2 -51.2 614.40 614.40" xmlns="http://www.w3.org/2000/svg" stroke="#d3aad9">
    <g istroke-width="0">
      <rect x="-51.2" y="-51.2" width="614.40" height="614.40" rx="122.88" fill="#4a044e" strokewidth="0"></rect>
    </g>
    <g stroke-linecap="round" stroke-linejoin="round">
    </g>
    <g id="SVGRepo_iconCarrier">
      <path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,
      37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z"></path><path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z">
      </path>
    </g>
  </svg>`    },
    {
      name:"Express",
      icon:`<svg fill="#d3aad9" viewBox="-2.4 -2.4 28.80 28.80" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#d3aad9ff" stroke-width="0.12000000000000002"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#4a044e" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></g></svg>`
    },
    {
      name:"Vue",
      icon:`<svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#4a044e" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.1143 2H15L12 6.9L9.42857 2H0L12 23L24 2H19.1143ZM3 3.75H5.91429L12 14.6L18.0857 3.75H21L12 19.5L3 3.75Z" fill="#d3aad9"></path> </g></svg>`
    },
    {
      name:"Tailwind",
      icon:`<svg fill="#d3aad9" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" stroke="#d3aad9"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#4a044e" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g></svg>`
    }
  ]

  const data = {
    projects,
    skills,
  };

  export default data;