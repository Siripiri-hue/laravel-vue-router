// in questo file si mettono le rotte da controllare con vue router

// importazione di vue, per utilizzare vue router
import Vue from 'vue';
// importazione di vue router e utilizzo
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// definizione dell'array contenente le rotte da controllare con vue router
const routes = [];

// nuova istanza di vue router
const route = new VueRouter ({
    routes, //gli passo l'array
    mode: 'history', //e la modalità con cui mostrare le rotte
})

export default route; //esporto l'istanza di vue router