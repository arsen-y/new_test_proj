<template>
  <div>
    <h2>Главная</h2>

      <div v-if="receivingRec">Загрузка данных...</div>

      <div v-if="items.length > 0">

      <div class="container text-center">
        <news-item v-for="post in items" :post="post" :key="post.id" />
      </div>

      </div>

      <div v-else>
        Нет записей в таблице
      </div>

    <div>
    <button @click="$router.push(`/news`)" class='btn'>Все новости</button>
  </div>

      <div>
    <button @click="$router.push(`/feedback`)" class='btn'>Обратная связь</button>
  </div>

  </div>
</template>

<script>
import axios from 'axios';
import NewsItem from "@/components/NewsItem";

export default {
  components: { NewsItem },
  data() {
    return {
      items: [],
      receivingRec: false
    }
  },

  methods: {
  
    async getRec() {

      this.receivingRec = true

      try {

        const response = await axios.get(this.$store.state.backUrl + '/api/news?limit=3&page=1&short=1')

        response.data.data.forEach(item => {
          this.items.push(item)
        })

      } catch (e) {

        console.log(e)
        alert('Ошибка при получении новостей')

      } finally {

        this.receivingRec = false

      }

    }
  },
  mounted() {
    this.getRec()
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 15px; 
}
</style>
