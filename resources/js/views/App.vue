// componente radice da montare su render, dopo averlo importato su front.js

<template>
    <!-- aggiungere header con nav -->

    <PostsList />
    
    <!-- aggiungere footer -->
</template>

<script>
import PostsList from './Posts.index.vue';

export default {
    components: {
        PostsList,
    }
}
</script>

<style>

</style>