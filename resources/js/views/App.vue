// componente radice da montare su render, dopo averlo importato su front.js

<template>
    <div>
        <header>header</header>

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