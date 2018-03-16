<template>
  <div class="l-grid__container l-membershipPackage membershipTotal">
    <div class="l-membershipPackage__total cartTotal cartTotal--primay">
      <div class="cartTotal__text">{{ label }}</div>
      <div>{{ amount }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartTotal',
  props: ['label', 'amount'],
  data () {
    return {
      caption: ''
    }
  }
}
</script>

