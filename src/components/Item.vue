<template>
  <tr>
    <td>
      <div class="card mb-3">
        <div>
          <img style='width: 30px; height: 30px;' :src='item.avatar'>
          <span class="ms-2">{{ item.date }}</span>
        </div>
        <div>{{ item.body }}</div>
        <div><a href="#">Add like</a></div>
        <div>All likes: {{ item.likes }}</div>
      </div>
    </td>
  </tr>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>
