//solo parte frontend

// importazione axios da bootstrap.js
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

//  importazione vue da app.js
window.Vue = require('vue'); // ∼ import Vue from 'vue';
import App from './views/App.vue'

// importazione di vue router e utilizzo
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
// poi le spostiamo in index.js e lo importiamo da lì, importando il file
import router from '../router' //importo l'istanza di vue router, non bisogna specificare index perché automaticamente cercherà un index

const app = new Vue({
    el: '#root', //cambio nome
    render: h => h(App), //fn di rendering, passargli il nome del componente che verrà montato su root all'inizio
    router, //utilizzo l'istanza di vue router nell'istanza di vue
});