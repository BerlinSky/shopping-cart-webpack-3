<template>
  <div>

    <section class="l-grid__container">
      <div class="l-cartGrid l-cartGrid__left l-mainContent mainContent">

        <div class="l-grid__container grid__container--ruler l-cartHeading">
          <div class="l-cartHeading__item stepTitle stepTitle--textCenter mobileOnly--block">My Store</div>
          <div class="l-cartHeading__item stepTitle stepTitle--textCenter-x">Payment Information</div>
        </div>

        <div class="l-grid__container">
          <div class="l-grid__span--xs-16 tableRow__bodyText-x cartTotal cartTotal--secondary">
            <div class="cartTotal__text">TOTAL</div>
            <div>US$ 85.00</div>
          </div>

          <!-- <div><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" alt="PayPal" /></div> -->
          <!-- <div><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_200x51.png" alt="PayPal" /></div> -->


          <div id="paypal-button-container"></div>


          <div class="l-grid__span--xs-16 grid__row cvvInstructionsContainer">
            <form method="post" action="invoice.html" class="cardFormContainer dataForm js-paymentForm">
              <div class="dataForm__section">
                <div class="cardListPanel">
                 <div class="cardIcon">
                   <img v-bind:class="{ cardIconmageHidden: active }" class="cardIcon__amex js-credit--amex" src="http://media.fanfire.com/fcShoppingCart/images/cards/amex2.png" />
                   <img class="cardIcon__amex js-credit--amex-mask" src="http://media.fanfire.com/fcShoppingCart/images/cards/amex2-grey.png" />
                 </div>
                 <div class="cardIcon">
                   <img class="cardIcon__visa js-credit--visa" src="http://media.fanfire.com/fcShoppingCart/images/cards/visa2.png" />
                   <img class="cardIcon__visa js-credit--visa-mask" src="http://media.fanfire.com/fcShoppingCart/images/cards/visa2-grey.png" />
                 </div>
                 <div class="cardIcon">
                   <img class="cardIcon__mastercard js-credit--mastercard" src="http://media.fanfire.com/fcShoppingCart/images/cards/mastercard2.png" />
                   <img class="cardIcon__mastercard js-credit--mastercard-mask" src="http://media.fanfire.com/fcShoppingCart/images/cards/mastercard2-grey.png" />
                 </div>
                 <div class="cardIcon">
                   <img class="cardIcon__discover js-credit--discover" src="http://media.fanfire.com/fcShoppingCart/images/cards/discover2.png" />
                   <img class="cardIcon__discover js-credit--discover-mask" src="http://media.fanfire.com/fcShoppingCart/images/cards/discover2-grey.png" />
                 </div>
               </div>

               <div class="cardNumberPanel">
                 <div class="cardNumberPanel__cardNumber">
                   <div class="inputGroup">
                     <input class="dataInput js-dataInput--cardNum" type="tel">
                     <label>Card Number</label>
                   </div>
                 </div>
                 <div class="expDateAndCVCodePanel__expDate">
                   <div class="inputGroup">
                     <input class="dataInput js-dataInput--cardExpDate" type="tel">
                     <label>MM/YY</label>
                   </div>
                 </div>
                 <div class="expDateAndCVCodePanel__cvCode">
                   <div class="inputGroup">
                     <input class="dataInput js-dataInput--cardCVCode" maxlength="4" type="tel">
                     <label>CVV</label>
                     <div class="cvvHelp">
                       <a href="#lightbox"><i class="fa fa-question-circle-o"></i></a>
                     </div>
                   </div>
                 </div>
               </div>
              </div>
            </form>
          </div>
        </div>

        <div class="mobileOnly--block">
          <div class="l-cartActionBlock cartActionBlock">
            <form class="dataForm">
              <a class="actionButton cart___couponCodeButton js-couponCodeButton-lead">Coupon Code</a>
            </form>
          </div>
        </div>

        <div class="l-grid__container cart___buttonContainer">
          <button class="l-grid__span--xs-16 grid__row actionButton cart___navButton js-btnPlaceOrder">Place Order</button>
        </div>

        <div class="l-grid__container">
          <div class="l-grid__span--xs-16">

            <div class="accordion">
              <input type="checkbox" id="checkbox-1" name="checkbox-accordion" />
              <label for="checkbox-1">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                Billing Address
              </label>

              <div class="accordionContent">
                <div class="accordionContent--bodyText">355 Mission Street</div>
                <div class="accordionContent--bodyText">Apt #201</div>
                <div class="accordionContent--bodyText">San Francisco</div>
                <div class="accordionContent--bodyText">CA 94666</div>
                <div class="accordionContent--bodyText">United States</div>
                <div class="accordionContent__buttonContainer">
                  <!-- <a class="accordionContent__button" href="address.html">Edit</a> -->
                  <a class="accordionContent__button" v-on:click="address">Edit</a>
                </div>
              </div>
            </div>
          </div>

          <div class="l-grid__span--xs-16 l-grid__span--md-8-x">

            <div class="accordion">
              <input type="checkbox" id="checkbox-2" name="checkbox-accordion" />
              <label for="checkbox-2">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                Shipping Address
              </label>

              <div class="accordionContent">
                <!-- <div class="tableRow__headerText">
                  <a class="actionButton" href="4-shipping-address.html">Edit</a>
                </div> -->
                <div class="accordionContent--bodyText">555 Peachtree Blvd</div>
                <!-- <div class="accordionContent--bodyText">&nbsp;</div> -->
                <div class="accordionContent--bodyText">Vancouver</div>
                <div class="accordionContent--bodyText">BC V6E 2M6</div>
                <div class="accordionContent--bodyText">Canada</div>
                <div class="accordionContent__buttonContainer">
                  <a class="accordionContent__button" v-on:click="address">Edit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="l-cartGrid l-cartGrid__right l-panel cartStepsContainer l-grid__container">
        <div class="miniCart l-grid__span--xs-16">
          <div class="miniCart__table">
            <div class="miniCart__tableRow miniCart__tableRow--header">
              <div class="miniCart__Column">Membership</div>
              <div class="miniCart__Column"></div>
            </div>
            <div class="miniCart__tableRow">
              <div class="miniCart__Column ">Summer 2013 Metropolitan Book Tour (NYC2013)</div>
              <div class="miniCart__Column">
              </div>
            </div>
            <div class="miniCart__tableRow">
              <div class="miniCart__Column miniCart__Column--subItem">Winter 2016 West Coast Book Tour (LAC2016)</div>

              <div class="miniCart__Column mobileOnly-x">
                <span class="mobileOnly">XS</span>
              </div>

            </div>
            <div class="miniCart__tableRow">
              <div class="miniCart__Column miniCart__Column--subItem">Winter 2016 West Coast Book Tour (LAC2016)</div>

              <div class="miniCart__Column mobileOnly-x">
                <span class="mobileOnly">L</span>
              </div>

            </div>
            <div class="miniCart__tableRow">
              <div class="miniCart__Column miniCart__Column--subItem">Winter 2016 West Coast Book Tour (LAC2016)</div>

              <div class="miniCart__Column mobileOnly-x">
                <span class="mobileOnly">S</span>
              </div>
            </div>
            <div class="l-grid__container">
              <div class="l-grid__span--xs-16 miniCart__footer text-right">US$ 89.55</div>
            </div>

            <div class="l-grid__container grid__container desktopOnly--flex">
              <div class="l-grid__span--xs-16 l-grid__span--md-5-x">
                <form class="dataForm" method="post" action="payment.html">
                  <div class="inputGroup grid__row--paddedSides js-couponCodeInput">
                    <input class="dataInput dataInput--secondary dataInput--bordered" type="text">
                  </div>
                  <a class="actionButton cart___couponCodeButton js-couponCodeButton">Coupon Code</a>
                  <button class="actionButton cart___couponCodeButton js-couponCodeInput">Apply Coupon</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>

  </div>
</template>


<script>
export default {
  name: 'Payment',
  data () {
    return {
      name: '',
      active: true
    }
  },
  methods: {
    address: function() {
      this.$router.push('/address');
    }
  }
}
</script>
