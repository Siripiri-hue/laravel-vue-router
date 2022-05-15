// in questo file si mettono le rotte da controllare con vue router

// importazione di vue, per utilizzare vue router
import Vue from 'vue';
// importazione di vue router e utilizzo
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Posts from '../js/pages/Posts.index.vue'; //importo la "vista" del componente
import Contact from '../js/pages/Contact.vue';

// definizione dell'array contenente le rotte da controllare con vue router
const routes = [
    {
        path: '/posts', //proprietà path e component indipensabili
        component: Posts,
        name: 'posts.index', //nome opzionale, si può arricchire anche con altre proprietàs
    },
    {
        path: '/contact',
        component: Contact,
        name: 'contact',
    },
];

// nuova istanza di vue router
const route = new VueRouter ({
    routes, //gli passo l'array
    mode: 'history', //e la modalità con cui mostrare le rotte
})

export default route; //esporto l'istanza di vue router