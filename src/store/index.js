import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default new Vuex.Store({
  actions: {
    getPosts() {
      return axiosInstance.get('/posts')
        .then(r => r.data)
    },

    getPost({}, id) {
      return axiosInstance.get(`/posts/${id}`)
        .then(r => r.data)
    },

    getPostComments({}, id) {
      return axiosInstance.get(`/posts/${id}/comments`)
        .then(r => r.data)
    },

    getUsers() {
      return axiosInstance.get('/users')
        .then(r => r.data)
    },

    getUser({}, id) {
      return axiosInstance.get(`/users/${id}`)
        .then(r => r.data)
    },

    getUserPosts({}, id) {
      return axiosInstance.get(`/user/${id}/posts`)
        .then(r => r.data)
    }
  }
})
