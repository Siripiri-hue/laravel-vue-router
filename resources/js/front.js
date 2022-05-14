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
import App from './views/App.vue';

const app = new Vue({
    el: '#root', //cambio nome
    render: h => h(App), //fn di rendering, passargli il nome del componente che verrà montato su root all'inizio
});