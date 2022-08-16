console.log(Vue)

const app = {
  data() {
    return {
      title: 'VTwitter',
      item: '',
      items: []
    }
  },
  methods: {
    onSubmit () {
      this.items.push({
        id: this.items.length + 1,
        avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
        body: this.item,
        date: new Date(Date.now()).toLocaleString()
      })
      this.item = ''
    }
  }
}

Vue.createApp(app).mount('#app')
