<template>
      <div>
            <h1>stripe payment</h1>
        <stripe-checkout
          ref="checkoutRef"
          mode="payment"
          :pk="publishableKey"
          :line-items="lineItems"

          @loading="v => loading = v"
        />
        <button @click="submit">Pay now!</button>
      </div>
    </template>
    <script >
    import { StripeCheckout } from '@vue-stripe/vue-stripe';
    export default {
      components: {
        StripeCheckout,
      },
      data () {
      //   this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
        return {
          loading: false,
          publishableKey:"pk_test_51MvgYZSIEt2pZyftO7328wP4DQijzbxcHBHkxMcneUhfxNsyEsbY0t4N1HeHNFecnbs4HGlqjX3wlr3Xd4tsdqq8004yNcYzkR",
          lineItems: [
            {
              price: 'price_1MvhSPSIEt2pZyftsQzWLX5a', // The id of the one-time price you created in your Stripe dashboard
              quantity: 1,
            },
          ],
          successURL: 'http://localhost:8080/hotel/room/success',
          cancelURL: 'http://localhost:8080/hotel/room/error',
        };
      },
      methods: {
        submit () {
          // You will be redirected to Stripe's secure checkout page
      //     alert("hii vivek");
          this.$refs.checkoutRef.redirectToCheckout();
        },
      },
    };
    </script>
