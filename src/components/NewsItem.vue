<template>

  <div class="container text-center post">
    <div>{{ post.title }}</div>
    <div>{{ post.short_txt }}</div>
    <div>{{ post.created_at }}</div>

    <button class='btn' @click="$router.push(`/posts/${post.id}`)">Открыть</button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid #470303;
  margin-bottom: 15px;
   border-radius: 15px; 
}
</style>
