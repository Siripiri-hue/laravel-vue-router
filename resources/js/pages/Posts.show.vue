<template>
  <div>
      {{ postDetail.title }}
  </div>
</template>

<script>
import Axios from "axios"

export default {
  data() {
    return {
      postDetail: null, //imposto una variabile vuota che conterrà le info del post
    }
  }, 

  methods: {
    fetchPostShow: function() { //creo una fn che andrà a prendere il post dal backend
      Axios.get(`/api/posts/${this.$route.params.slug}`)
        .then (res => {
          const { post } = res.data;
          this.postDetail = post;
        })
        .catch (err => {
          console.warn(err);
        });
    },
  },

  beforeMount() {
    this.fetchPostShow(); //richiamo la fn per recuperare il post
  }
}
</script>

<style>

</style>