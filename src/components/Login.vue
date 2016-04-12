<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--6-col mdl-cell--3-offset">
      <form action="" method="get" accept-charset="utf-8" @submit="submit">
        <mdl-textfield floating-label="Email" :value.sync="email"></mdl-textfield><br>
        <mdl-textfield floating-label="Password" :value.sync="password"></mdl-textfield>
        <br>
        <mdl-button v-mdl-ripple-effect>Button</mdl-button>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    submit () {
      this.$http.post('/auth/login', {email: this.email, password: this.password})
    }
  }
}
</script>

<style >
</style>