<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" v-link="'login'">Login</a>
        <a class="mdl-navigation__link" v-link="'home'">Home</a>
        <a class="mdl-navigation__link" v-link="'accounts'">Accounts</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <router-view class="page-content"></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 'test'
    }
  }
}
</script>

<style>
</style>
