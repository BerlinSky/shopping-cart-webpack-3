<template>
  <form class="l-grid__container cart___buttonContainer js-dataForm">
    <input type="hidden" name="sizeSelection" value="" class="js-sizeSelectionHidden">
    <button type="button" v-on:click="onSubmit"  class="l-cartActionBlock cartActionBlock actionButton cart___navButton">{{ caption }}</button>
  </form>
</template>

<script>
export default {
  name: 'CartSubmitButton',
  data () {
    return {
      caption: 'Go to payment'
    }
  },
  methods: {
    onSubmit: function () {
      this.$emit('navigateToPayment');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
