<template lang="pug">
  b-container
    h3.mt-4.mb-4 Users

    error-alert.mt-4(v-if="hasError")

    template(v-else)
      router-link(v-for="user of users" :to="`/user/${user.id}`")
        b-card.mt-2 {{ user.name }}
</template>

<script>
  import ErrorAlert from './ErrorAlert'
  import { mapActions } from 'vuex'

  export default  {
    components: {
      ErrorAlert
    },

    data: () => ({
      users: [],
      hasError: false
    }),

    created() {
      this.getUsers()
        .then(data => {
          this.users = data
        })
        .catch(() =>
          this.hasError = true
        )
    },

    methods: {
      ...mapActions(['getUsers'])
    }
  }
</script>