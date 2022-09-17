<template lang="pug">
  b-container
    b-btn.mt-4(:to="`/users`" variant="outline-primary") < Users

    error-alert.mt-4(v-if="hasError")

    template(v-else)
      template(v-if="loaded")
        h4.mt-4.mb-3 {{ user.name }}

        .field
          b ID:
          | {{ user.id }}

        .field
          b Username:
          | {{ user.username }}

        .field
          b E-mail:
          a(:href="`mailto:${user.email}`") {{ user.email }}

        .field
          b Address:
          | {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}, {{ user.address.zipcode }}, geo: {{ user.address.geo.lat }} {{ user.address.geo.lng }}

        .field
          b Phone:
          | {{ user.phone }}

        .field
          b Website:
          a(:href="`https://${user.website}`") {{ user.website }}

        .field
          b Company:
          | {{ user.company.name }}, {{ user.company.catchPhrase }}, {{ user.company.bs }}

        h5.mt-4 Posts
        ul
          li(v-for="post of posts")
            router-link(:to="`/posts/${post.id}`") {{ post.title }}
</template>

<script>
  import ErrorAlert from './ErrorAlert'
  import { mapActions } from 'vuex'

  export default {
    components: {
      ErrorAlert
    },

    data() {
      return {
        user: {},
        posts: [],
        loaded: false,
        hasError: false
      }
    },

    created() {
      this.getUser(this.$route.params.id)
        .then(data => {
          this.user = data
          this.loaded = true
        })
        .catch(() =>
          this.hasError = true
        )

      this.getUserPosts(this.$route.params.id)
        .then(data =>
          this.posts = data
        )
        .catch(() =>
          this.hasError = true
        )
    },

    methods: {
      ...mapActions(['getUser', 'getUserPosts'])
    }
  }
</script>

<style scoped lang="sass">
  .field
    b
      margin-right: 0.25rem
</style>