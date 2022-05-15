<template>
  <div class="card">
      <h3>{{ post.title }}</h3>
      <router-link :to="{ name: 'posts.show', params: {slug: post.slug} }">Dettaglio del post</router-link>
  </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: false,
        }
    }
}
</script>

<style>

</style>