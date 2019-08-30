<template lang="pug">
  form
    v-layout(column justify-center)
      v-text-field(label="Name")
      v-text-field(label="Password" type="password")
      v-btn(type="submit" color="info" to="/recipe") Login
    
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "formComponent",
});

</script>

