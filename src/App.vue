<template lang="pug">
  #app
    b-navbar(toggleable='sm' type='dark' variant='primary')
      b-navbar-brand(to="/posts") KONTUR TEST
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav='')
        b-navbar-nav
          b-nav-item
            b-btn(to="/posts" variant="outline-light") Posts
          b-nav-item
            b-btn(to="/users" variant="outline-light") Users

    router-view
</template>