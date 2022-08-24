<template>
  <table class="table">
    <Item v-for='item in items' :key='item.id' :item='item' />
  </table>
</template>

<script>
  import Item from '@/components/Item.vue'

  export default {
    components: { Item },
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>
