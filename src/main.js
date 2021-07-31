import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*-------------------| Prime Vue |---------------------*/
import Menubar from 'primevue/menubar';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import Toolbar from 'primevue/toolbar';
import SplitButton from 'primevue/splitbutton';
import Toast from 'primevue/toast';



import PrimeVue from 'primevue/config'

import 'primeflex/primeflex.css';                       //layout
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css';           //core css
import 'primeicons/primeicons.css';                     //icons
/*------------------------------------------------------*/

const app = createApp(App)
app.use(router)
app.use(store)
app.use(PrimeVue)

app.component('Menubar', Menubar);
app.component('InputText', InputText);
app.component('Button', Button );
app.component('Card', Card);
app.component('Dialog', Dialog);
app.component('Toolbar', Toolbar);
app.component('SplitButton', SplitButton);
app.component('Toast', Toast);

app.mount('#app')
