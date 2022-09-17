<template lang="pug">
  b-container
    h3.mt-4.mb-4 Posts

    router-link(v-for="post of posts" :to="`/posts/${post.id}`")
      b-card.mt-2 {{ post.title }}
</template>

<script>
  import { mapActions } from 'vuex'

  export default  {
    data: () => ({
      posts: []
    }),

    created() {
      this.getPosts()
        .then(data => {
          this.posts = data
        })
    },

    methods: {
      ...mapActions(['getPosts'])
    }
  }
</script>