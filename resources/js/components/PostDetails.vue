<template>
  <div class="card">
      <h3>{{ post.title }}</h3>
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