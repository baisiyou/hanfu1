import React from 'react'
import PageHero from '../components/PageHero'
import StripeCheckout from '../components/StripeCheckout'



const CheckoutPage = () => {
  return (
      <section>
          {/* <PageHero title={'Checkout'} /> */}
      <div className="page h-screen flex items-center justify-center">
        <StripeCheckout />
        </div>
    </section>
  )
}

export default CheckoutPage