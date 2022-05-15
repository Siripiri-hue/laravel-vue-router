// componente radice da montare su render, dopo averlo importato su front.js

<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><router-link :to="{ name: 'posts.index' }">Post List</router-link></li>
                    <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
                    <!-- <router-link to="/contact">Contatti</router-link> -->
                </ul>
            </nav>
        </header>

        <!-- tag per visualizzare le rotte impostate con vue router -->
        <router-view></router-view> 
        
        <footer>footer</footer>
    </div>
</template>

<script>
import PostsList from '../pages/Posts.index.vue';

export default {
    components: {
        PostsList,
    }
}
</script>

<style>

</style>