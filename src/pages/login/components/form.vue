<template lang="pug">
  form
    v-layout(column justify-center)
      v-text-field(label="Name" :value="login.name" @input="(name) => updateLogin(name, login.password)")
      v-text-field(label="Password" type="password" :value="login.password" @input="(password) => updateLogin(login.name, password)")
      v-btn(type="submit" color="info" @click.prevent="loginRequest") Login
    
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { login } from '../view.model';

export default Vue.extend({
  name: "formComponent",
  props: {
    login: {} as PropOptions<login>,
    updateLogin: {} as PropOptions<(name: string, password: string) => void>,
    loginRequest: {} as PropOptions<() => void>
  },
});

</script>

