<template>
  <div>
    <section class="l-grid__container l-contentSection--mobile">
      <div class="l-cartGrid l-cartGrid__default mainContent">
        <div class="l-grid__container grid__container--ruler l-cartHeading">
          <div class="l-cartHeading__item stepTitle"></div>
          <div class="l-cartHeading__item stepTitle stepTitle--textCenter mobileOnly--block">My Store</div>
          <div class="l-cartHeading__item stepTitle"></div>
        </div>

        <cart-total label="TOTAL" amount="US$ 85.00">
        </cart-total>

        <cart-submit-button v-on:navigateToPayment="payment"></cart-submit-button>

        <apply-coupon>
        </apply-coupon>

      </div>
    </section>

    <section class="l-grid__container l-contentSection--mobile">
      <div class="l-cartGrid l-cartGrid__default mainContent">
        <div class="l-grid__container l-grid__container--alignToBottom l-membershipComponent membershipComponent">
          <div class="l-membershipComponent__item l-grid__container l-grid__container--vertical l-grid__container--center">
          </div>
          <div class="l-membershipComponent__item membershipComponentBlock">
            <div class="membershipComponent__item cart__itemText cart__itemText--left">
              Nightrain T-Shirt GNRFF016
            </div>

            <div>
              <div class="cart__itemSizePanel">
                  <ul>
                  <li class="js-sizeSelection"><div class="sizeBlock sizeBlock--chosen sizeBlock--smallRectangle js-sizeBlock" data-itemId="001" data-sizePicker="M">M</div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="l-grid__container l-grid__container--alignToBottom l-membershipComponent membershipComponent">
          <div class="l-membershipComponent__item l-grid__container l-grid__container--vertical l-grid__container--center">
          </div>
          <div class="l-membershipComponent__item membershipComponentBlock">
            <div class="membershipComponent__item cart__itemText cart__itemText--left">
              Nightrain Premium Membership Hoodie GNRF7833
            </div>
            <div>
              <div class="cart__itemSizePanel">
                <ul>
                  <li class="js-sizeSelection"><div class="sizeBlock sizeBlock--chosen sizeBlock--smallRectangle js-sizeBlock" data-itemId="003" data-sizePicker="XXL">XXL</div></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="l-cartActionBlock cartActionBlock">
            <form class="dataForm js-dataForm">
              <div class="actionButtonLinkBlock">
                <a v-on:click="payment" class="actionButtonLink js-couponCodeButton">Edit Cart</a>
              </div>
            </form>
          </div>

        </div>
      </div>

    </section>

    <section class="l-grid__container l-contentSection--desktop">

      <div class="l-cartGrid l-cartGrid__default mainContent">
        <div class="l-grid__container grid__container--ruler l-cartHeading">
          <div class="l-cartHeading__item stepTitle stepTitle--textCenter mobileOnly--block">My Store</div>
          <div class="l-cartHeading__item stepTitle">Review Cart (Size Selection)</div>
        </div>

        <div class="membershipPackage desktopOnly--flex">
          <div class="l-membershipPackage__item l-grid__container l-grid__container--vertical l-grid__container--center">
            <div class="cartItemImage">
              <img src="http://media.fanfire.com/fcShoppingCart/images/GNR/membership.jpg">
            </div>
          </div>
          <div class="l-membershipPackage__item membershipPackage__item cart__itemText cart__itemText--header">Nightrain Fan Club Premium Membership GNRBPN16</div>
          <div class="l-membershipPackage__item membershipPackage__item cart__itemText--header text-right">US$ 85.00</div>
        </div>

        <div class="l-grid__container l-grid__container--alignToBottom l-membershipComponent membershipComponent">
          <div class="l-membershipComponent__item l-grid__container l-grid__container--vertical l-grid__container--center">
            <div class="cartItemImage">
              <img src="http://media.fanfire.com/fcShoppingCart/images/GNR/tshirt.jpg">
            </div>
          </div>
          <div class="l-membershipComponent__item membershipComponent__item cart__itemText">
            Nightrain T-Shirt GNRFF016
          </div>

          <div class="l-membershipComponent__item">
            <div class="cart__itemSizePanel">
               <ul>
                <li class="js-sizeSelection"><div class="sizeBlock js-sizeBlock" data-itemId="001" data-sizePicker="S">S</div></li>
                <li class="js-sizeSelection"><div class="sizeBlock sizeBlock--chosen js-sizeBlock" data-itemId="001" data-sizePicker="M">M</div></li>
                <li class="js-sizeSelection"><div class="sizeBlock js-sizeBlock" data-itemId="001" data-sizePicker="L">L</div></li>
                <li class="js-sizeSelection"><div class="sizeBlock js-sizeBlock" data-itemId="001" data-sizePicker="XL">XL</div></li>
                <li class="js-sizeSelection"><div class="sizeBlock js-sizeBlock" data-itemId="001" data-sizePicker="XXL">XXL</div></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="l-grid__container l-grid__container--alignToBottom l-membershipComponent membershipComponent">
          <div class="l-membershipComponent__item l-grid__container l-grid__container--vertical l-grid__container--center">
            <div class="cartItemImage">
              <img src="http://media.fanfire.com/fcShoppingCart/images/GNR/membership.jpg">
            </div>
          </div>
          <div class="l-membershipComponent__item membershipComponent__item cart__itemText">Nightrain Fan Club Premium Membership GNRFPN17</div>

          <div class="l-membershipComponent__item">
          </div>
        </div>

        <div class="l-grid__container l-grid__container--alignToBottom l-membershipComponent membershipComponent">
          <div class="l-membershipComponent__item l-grid__container l-grid__container--vertical l-grid__container--center">
            <div class="cartItemImage">
              <img src="http://media.fanfire.com/fcShoppingCart/images/GNR/hoodie.jpg">
            </div>
          </div>
          <div class="l-membershipComponent__item membershipComponent__item cart__itemText">
            Nightrain Premium Membership Hoodie GNRF7833
          </div>
          <div class="l-membershipComponent__item">
            <div class="cart__itemSizePanel">
              <ul>
                <li class="js-sizeSelection"><div class="sizeBlock sizeBlock--chosen js-sizeBlock" data-itemId="003" data-sizePicker="S">S</div></li>
                <li class="js-sizeSelection"><div class="sizeBlock js-sizeBlock" data-itemId="003" data-sizePicker="M">M</div></li>
                <li class="js-sizeSelection"><div class="sizeBlock js-sizeBlock" data-itemId="003" data-sizePicker="L">L</div></li>
                <li class="js-sizeSelection"><div class="sizeBlock js-sizeBlock" data-itemId="003" data-sizePicker="XL">XL</div></li>
                <li class="js-sizeSelection"><div class="sizeBlock js-sizeBlock" data-itemId="003" data-sizePicker="XXL">XXL</div></li>
              </ul>
            </div>
          </div>
        </div>

        <cart-total>
        </cart-total>

        <div class="l-cartActionBlock cartActionBlock">
          <form class="dataForm js-dataForm" method="post" action="payment.html">
            <div class="inputGroup js-couponCodeInput">
                <input class="dataInput" type="text">
                <label>Coupon Code</label>
            </div>
            <a class="actionButton cart___couponCodeButton js-couponCodeButton">Coupon Code</a>
          </form>
        </div>

        <cart-submit-button v-on:navigateToPayment="payment"></cart-submit-button>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: '',
      caption: 'Payment',
    }
  },
  methods: {
    payment: function() {
        // Do some stuff here
      this.$router.push('/payment');
    }
  }
}
</script>
