<template lang="pug">
  v-layout
    v-flex(xs12 sm6 offset-sm3)
      v-card
        v-card-title(primary-title)
          h3.headline Login
        v-card-text
          form-component
</template>

<script lang="ts">
import Vue from 'vue'
import { FormComponent } from "./components"

export default Vue.extend({
  name: "loginPage",
  components: {
    FormComponent
  }
})
</script>

