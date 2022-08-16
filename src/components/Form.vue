<template>
  <form @submit.prevent='onSubmit' class="">
    <textarea v-model='body' required placeholder='Напишите сообщение' class="form-control"/>
    <button type='submit' class="btn btn-primary mt-3">Отправить</button>
  </form>
</template>

<script>
  export default {
    date () {
      return {
        body: ''
      }
    },
    methods: {
      onSubmit () {
        this.$emit('onSubmit', {
          id: Math.round(Math.random() * 30),
          avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
          body: this.body,
          likes: 0,
          date: new Date(Date.now()).toLocaleString()
        })

        this.body = ''
      }
    }
  }
</script>
