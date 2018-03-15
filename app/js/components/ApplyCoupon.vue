<template>
  <div class="l-grid__container">
    <div class="l-cartActionBlock cartActionBlock">
      <form class="dataForm js-dataForm" method="post" action="payment.html">
        <input type="hidden" name="sizeSelection" value="" class="js-sizeSelectionHidden">
        <div class="cartInputError">
          <div class="cartInputError__denote">*</div>
          <div class="cartInputError__text">Please supply a valid coupon code. Otherwise, no memebership benefit can be enjoyed.</div>
        </div>
        <div class="inputGroup js-couponCodeInput">
          <input class="dataInput" type="text">
          <label>Coupon Code</label>
        </div>
        <div class="actionButtonLinkBlock">
          <a class="actionButtonLink js-couponCodeButton">Coupon Code</a>
        </div>

        <button type="submit" class="actionButton cart___couponCodeButton js-couponCodeInput">Apply Coupon</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplyCoupon',
  data () {
    return {
      message: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
