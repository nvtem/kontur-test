<template lang="pug">
  b-container
    h3.mt-4.mb-4 Users

    router-link(v-for="user of users" :to="`/user/${user.id}`")
      b-card.mt-2 {{ user.name }}
</template>

<script>
import { mapActions } from 'vuex'

export default  {
  data: () => ({
    users: []
  }),

  created() {
    this.getUsers()
      .then(data => {
        this.users = data
      })
  },

  methods: {
    ...mapActions(['getUsers'])
  }
}
</script>