<template lang="pug">
  b-container
    b-btn.mt-4(:to="`/posts`" variant="outline-primary") < Posts

    b-alert.mt-4(v-if="hasError" variant="danger" show) Error! Post does not exist.

    template(v-else)
      b-card.mt-4(:title="title" bg-variant="light" )
        b-card-text {{ body }}

      h6.mt-4 Comments
      ul
        li.mt-4(v-for="comment of comments") {{ comment.body }}
          .d-block.small.mt-1
            span.text-muted.mr-1 by
            a(:href="`mailto:${comment.email}`") {{ comment.name }}
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data: () => ({
      body: '',
      title: '',
      comments: [],
      hasError: false
    }),

    created() {
      this.getPost(this.$route.params.id)
        .then(data => {
          this.title = data.title
          this.body = data.body
        })
        .catch(() =>
          this.hasError = true
        )

      this.getPostComments(this.$route.params.id)
        .then(data => {
          this.comments = data
        })
    },

    methods: {
      ...mapActions(['getPost', 'getPostComments'])
    }
  }
</script>