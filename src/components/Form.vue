<template>
  <form @submit.prevent='onSubmit'>
    <textarea v-model='body' required placeholder='Напишите сообщение' class="form-control" />
    <button type='submit' class='btn btn-primary mt-3'>Отправить</button>
  </form>
</template>

<script>
  import { ref } from 'vue'

  export default {
    emits: ['onSubmit'],

    setup(_, { emit }) {
      const body = ref('')

      const onSubmit = () => {
        emit('onSubmit', {
          id: Math.round(Math.random() * 30),
          avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
          body: body.value,
          likes: 0,
          date: new Date(Date.now()).toLocaleString()
        })
        body.value = ''
      }
      return { body, onSubmit }
    }
  }
</script>
