<template>
  <div class="container">
      <h1>Lista post:</h1>
      <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
// import axios from "axios"; //importo axios
import Post from '../components/PostCard.vue';

export default {
    components: {
        Post,
    },

    data() {
        return {
            posts: [], //setto un array vuoto per riempirlo con i dati della chiamata
        }
    }, 

    methods: {
        fetchPosts: function() { //funzione per recuperare i dati con axios
            axios.get('/api/posts')
                .then( res => {
                    const { posts } = res.data;
                    this.posts = posts;
                })
                .catch( err => {
                    console.warn(err);
                })
        }
    }, 

    mounted() {
        this.fetchPosts(); //richiamo la fn quando il componente viene montato
    }
}
</script>

<style>

</style>