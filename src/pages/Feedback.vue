<template>
  <div>
    <h2>Обратная связь</h2>

    <form @submit.prevent>

      <div class='form-group'>
        <label>ФИО</label>
        <input type='text' class='form-control' v-model="rec.fio"
          v-bind:class="(errors.fio.length > 0) ? 'field-error-brd' : ''" />
        <div v-if='errors.fio.length > 0' class='field-error'>{{ errors.fio }}</div>
      </div>

      <div class='form-group'>
        <label>Адрес</label>
        <input type='text' class='form-control' v-model="rec.addr"
          v-bind:class="(errors.addr.length > 0) ? 'field-error-brd' : ''" />
        <div v-if='errors.addr.length > 0' class='field-error'>{{ errors.addr }}</div>
      </div>

      <div class='form-group'>
        <label>Телефон</label>
        <input type='text' class='form-control' v-model="rec.phone"
          v-bind:class="(errors.phone.length > 0) ? 'field-error-brd' : ''" />
        <div v-if='errors.phone.length > 0' class='field-error'>{{ errors.phone }}</div>
      </div>

      <div class='form-group'>
        <label>E-mail</label>
        <input type='text' class='form-control' v-model="rec.email"
          v-bind:class="(errors.email.length > 0) ? 'field-error-brd' : ''" />
        <div v-if='errors.email.length > 0' class='field-error'>{{ errors.email }}</div>
      </div>

      <div class='form-group'>
        <label>Заголовок</label>
        <input type='text' class='form-control' v-model="rec.subject"
          v-bind:class="(errors.subject.length > 0) ? 'field-error-brd' : ''" />
        <div v-if='errors.subject.length > 0' class='field-error'>{{ errors.subject }}</div>
      </div>

      <div class='form-group'>
        <label>Сообщение</label>
        <textarea class='form-control' v-model="rec.message"
          v-bind:class="(errors.message.length > 0) ? 'field-error-brd' : ''"></textarea>
        <div v-if='errors.message.length > 0' class='field-error'>{{ errors.message }}</div>
      </div>

      <div class='form-group'><button type='submit' class='btn' @click="createRec">Отправить</button></div>
 </form>

      <div v-if="sendingRec">Отправка...</div>

      <div v-if="receivingRec">Загрузка данных...</div>

      <div v-if="items.length > 0">

      <div class="container text-center">
        <post-item v-for="post in items" :post="post" :key="post.id" />
      </div>

      </div>

      <div v-else>
        Нет записей в таблице
      </div>

  </div>
</template>

<script>
import axios from 'axios';
import PostItem from "@/components/PostItem";

export default {
  components: { PostItem },
  data() {
    return {
      rec: {
        fio: '',
        addr: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      errors: {
        fio: '',
        addr: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      items: [],
      sendingRec: false,
      receivingRec: false
    }
  },

  methods: {
    async createRec() {

      this.errors = {
        fio: '',
        addr: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }

      this.sendingRec = true

      try {

        const response = await axios.post(this.$store.state.backUrl + '/api/contacts', this.rec)

        console.log(response.data)

        if (response.data.status) {

          this.rec = {
            fio: '',
            addr: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          }

          this.getRec()

        } else if (response.data.errors) {

          for (let key in response.data.errors) {
            this.errors[key] = response.data.errors[key][0]
          }

        }

      } catch (e) {

        console.log(e)
        alert('Ошибка запроса')

      } finally {

        this.sendingRec = false

      }


    },
    async getRec() {

      this.receivingRec = true

      try {

        const response = await axios.get(this.$store.state.backUrl + '/api/contacts')

        response.data.forEach(item => {
          this.items.push(item)
        })

      } catch (e) {

        console.log(e)
        alert('Ошибка запроса получения сообщений')

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
.form-group {
  margin-bottom: 10px;
}

.field-error {
  color: #f51818;
}

.field-error-brd {
  border: 1px solid #f51818;
}
</style>
