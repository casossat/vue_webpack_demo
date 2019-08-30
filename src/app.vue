<template lang="pug">
  //.components
    h1 {{ message }}
    message-component(v-model="message")
  v-app
    //div
      h1 {{ message }}
    
    router-view

</template>

<script lang="ts">
import Vue from "vue";
//import messageComponent from './message.vue';

export default Vue.extend({
  name: "App",
  components: {
    //messageComponent
  },
  /*data() {
    return {
      message: "Hello from App!!"
    };
  },*/
});
</script>

