<template lang="pug">
  login(:login="login" :update-login="updateLogin" :login-request="loginRequest")
</template>

<script lang="ts">
import Vue from "vue";
import login from "./page.vue";
import { createEmptyLogin } from "./view.model";
import { loginRequest } from "../../rest-api/api/login/login";
import { mapLoginVmToModel } from "./mappers";

export default Vue.extend({
  name: "LoginPageContainer",
  components: { login },
  data() {
    return {
      login: createEmptyLogin()
    };
  },
  methods: {
    updateLogin: function(name, password) {
      this.login = {
        name,
        password
      };
    },
    loginRequest: function() {
      const loginModel = mapLoginVmToModel(this.login);
      loginRequest(loginModel)
        .then(() => {
          this.$router.push("/recipe");
        })
        .catch(err => console.log(err));
    }
  }
});
</script>

