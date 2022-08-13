<template>

  <div class="container text-center post">

    <div class="row">
      <div class="col">
        {{ post.fio }}
      </div>
      <div class="col">
        {{ post.subject }}
      </div>
      <div class="col">
        {{ post.message }}
      </div>
    </div>

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
