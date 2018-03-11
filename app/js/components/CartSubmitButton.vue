<template>
  <form class="l-grid__container cart___buttonContainer js-dataForm" method="post" action="payment.html">
    <input type="hidden" name="sizeSelection" value="" class="js-sizeSelectionHidden">
    <button type="submit" class="l-cartActionBlock cartActionBlock actionButton cart___navButton">{{ caption }}</button>
  </form>
</template>

<script>
export default {
  name: 'CartSubmitButton',
  data () {
    return {
      caption: 'Go to payment'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
