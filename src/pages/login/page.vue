<template lang="pug">
  v-layout
    v-flex(xs12 sm6 offset-sm3)
      v-card
        v-card-title(primary-title)
          h3.headline Login
        v-card-text
          form-component(:login="login", :update-login="updateLogin" :login-request="loginRequest")
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { FormComponent } from "./components";
import { login } from './view.model';

export default Vue.extend({
  name: "loginPage",
  components: {
    FormComponent
  },
  props: {
    login: {} as PropOptions<login>,
    updateLogin: {} as PropOptions<(name: string, password: string) => void>,
    loginRequest: {} as PropOptions<() => void>,
  }
})
</script>

