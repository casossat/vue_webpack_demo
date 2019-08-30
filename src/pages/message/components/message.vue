<template lang="pug">
  .hello-world
    input(:value="value" @input="onChange")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "messageComponent",
  props: {
    value: String
  },
  methods: {
    onChange: function(event) {
      this.$emit('input', event.target.value);
    }
  }
});

</script>

