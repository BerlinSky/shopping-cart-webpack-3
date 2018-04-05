import $ from 'jquery';
import Cleave from 'cleave.js';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './components/Routes';

Vue.use(VueRouter)
const router = new VueRouter({
  routes // short for `routes: routes`
})

import VueCustomElement from 'vue-custom-element'
Vue.use(VueCustomElement)

import CartSubmitButton from './components/CartSubmitButton';
Vue.customElement('cart-submit-button', CartSubmitButton)

import ApplyCoupon from './components/ApplyCoupon';
Vue.customElement('apply-coupon', ApplyCoupon)

import SiteBanner from './components/SiteBanner';
Vue.customElement('site-banner', SiteBanner)

import SiteFooter from './components/SiteFooter';
Vue.customElement('site-footer', SiteFooter)

import CartTotal from './components/CartTotal';
Vue.customElement('cart-total', CartTotal)

const app = new Vue({  // eslint-disable-line no-unused-vars
  router
}).$mount('#fanclubApp')

$(function () {

	$('.js-couponCodeInput').hide();

	const couponButtonLead = $('.js-couponCodeButton-lead');
	const couponButton = $('.js-couponCodeButton');

	couponButtonLead.click(function( event ) {
		$(event.target).hide();
		couponButton.hide();
		$('.js-couponCodeInput').show();
		$('.js-couponCodeInput').focus();
	});

	couponButton.click(function( event ) {
		$(event.target).hide();
		couponButtonLead.hide();
		$('.js-couponCodeInput').show();
		$('.js-couponCodeInput').focus();
	});

  $('.js-credit--default').css({ "display": "block" });

  if ($('.js-dataInput--cardNum').length > 0) {
  	dimCardImages(false);

		// it exists
		// no-unused-vars
		const cleaveCardNum = new Cleave('.js-dataInput--cardNum', {   // eslint-disable-line no-unused-vars
		  creditCard: true,
		  onCreditCardTypeChanged: function (type) {
		    console.log(type);

		    if (type === 'unknown') {
		      dimCardImages(false);
		    }
		    else {
		      dsiplayCardImages(type);
		    }
		  }
		});
	}

  if ($('.js-dataInput--cardExpDate').length > 0) {
		const cleaeveCardDate = new Cleave('.js-dataInput--cardExpDate', {  // eslint-disable-line no-unused-vars
	    date: true,
	    datePattern: ['m', 'y'],
	    delimiter: '/'
		});
	}

	if ($('.js-dataInput--cardCVCode').length > 0) {
		const cleaeveCardCvCode = new Cleave('.js-dataInput--cardCVCode', {  // eslint-disable-line no-unused-vars
	    numeral: true,
	    delimiter: ''
		});
	}

	function dimCardImages(dimFlag) {
		if (dimFlag) {
			$('.js-credit--amex').hide();
			$('.js-credit--amex-mask').show();
			$('.js-credit--visa').hide();
			$('.js-credit--visa-mask').show();
			$('.js-credit--mastercard').hide();
			$('.js-credit--mastercard-mask').show();
			$('.js-credit--discover').hide();
			$('.js-credit--discover-mask').show();
		}
		else {
			$('.js-credit--amex').show();
			$('.js-credit--amex-mask').hide();
			$('.js-credit--visa').show();
			$('.js-credit--visa-mask').hide();
			$('.js-credit--mastercard').show();
			$('.js-credit--mastercard-mask').hide();
			$('.js-credit--discover').show();
			$('.js-credit--discover-mask').hide();
		}
  }

	function dsiplayCardImages(type) {
    dimCardImages(true)

		const cardType = '.js-credit--' + type;
		const cardTypeMask = '.js-credit--' + type + '-mask';
		$(cardType).show();
		$(cardTypeMask).hide();
	}

	$('.dataForm__section .inputGroup input').focusout((event) => {
		const input = $(event.target);
	  const textVal = input.val();
	  if(textVal === "") {
	    input.removeClass('js-userData');
	  }
	  else {
	    input.addClass('js-userData');
	  }
	});

	$(".js-selectCountry").select2({ width: '100%' });

	$(".js-selectState").select2({ width: '100%' });

	$('b[role="presentation"]').hide();

	$(".js-selectItemSize").select2({
		minimumResultsForSearch: Infinity
	});
});






