<template>
  <div class='container col-6 mt-3'>
    <h1>Тестовая приложка на Vue 3</h1>
    <h2>Разные сообщения</h2>
    <hr>
    <Form @onSubmit='handleSubmit' />
    <div class='mt-4'>
      <List :items='items'/>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  import Form from '@/components/Form.vue'
  import List from '@/components/List.vue'

  export default {
    components: { Form, List},
    setup () {
      const items = ref([
      {
        id: 1,
        body: 'hello 1',
        avatar: `https://avatars.dicebear.com/api/male/1.svg`,
        date: new Date(Date.now()).toLocaleString(),
        likes: 6
      },
      {
        id: 2,
        body: 'hello 2',
        avatar: `https://avatars.dicebear.com/api/male/2.svg`,
        date: new Date(Date.now()).toLocaleString(),
        likes: 12
      }
    ])
    const handleSubmit = item => items.value.push(item)

    return {
      items,
      handleSubmit
      }
    }
  }
</script>
