import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faB, faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import {faFilePdf} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faFlaskVial } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';





/* add icons to the library */
library.add(faUserSecret, faDownload, faFilePdf, faGithub, faLinkedin, faComputer, faMusic, faFlaskVial, faLocationDot, faAt, faPhone, faUsers, faRotate, faMagnifyingGlass, faHandHoldingHeart, faBolt, faHouse, faAddressCard, faEnvelope, faImages)


createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
