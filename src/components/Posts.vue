<template lang="pug">
  b-container
    h3.mt-4.mb-4 Posts

    error-alert.mt-4(v-if="hasError")

    template(v-else)
      router-link(v-for="post of posts" :to="`/posts/${post.id}`")
        b-card.mt-2 {{ post.title }}
</template>

<script>
  import ErrorAlert from './ErrorAlert'
  import { mapActions } from 'vuex'

  export default  {
    components: {
      ErrorAlert
    },

    data: () => ({
      posts: [],
      hasError: false
    }),

    created() {
      this.getPosts()
        .then(data => {
          this.posts = data
        })
        .catch(() =>
          this.hasError = true
        )
    },

    methods: {
      ...mapActions(['getPosts'])
    }
  }
</script>