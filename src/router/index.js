import Vue from 'vue'
import VueRouter from 'vue-router'

import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import Users from '../components/Users.vue'
import User from '../components/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },

  {
    path: '/posts/:id',
    name: 'post',
    component: Post
  },

  {
    path: '/users',
    name: 'users',
    component: Users
  },

  {
    path: '/user/:id',
    name: 'user',
    component: User
  },

  {
    path: '',
    beforeEnter: (to, from, next) => next('/posts')
  }
]

const router = new VueRouter({
  routes
})

export default router
