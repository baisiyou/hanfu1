import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Link, useNavigate } from 'react-router-dom'
import "../payment.css";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import {  UseCartContext } from "../context/cart_context";
import { useUserContext } from "../context/usercontext";
import { formatPrice } from "../reducers/helpers";
import { Alert, Snackbar } from "@mui/material";

const promise = loadStripe('pk_test_51OQzU9ExmYKuLPGzbC4ZsDhTyDWXqzUJ4Ci486bhTKmjfj2OyqZSIj7azttAWXOeMrfMgng3q9MMncFrTGHjflbe00TwGRtn8x');

const CheckoutForm = () => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { myUser } = useUserContext();
  const navigation = useNavigate()
  const { cart, shipping_fee, total_amount, clearCart } = UseCartContext();
  const createPaymentIntent = async () => {
    try {
      const data = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({ cart, shipping_fee, total_amount })
      );
      setClientSecret(data.data.clientSecret);
    } catch (error) {
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: "#4c4c57",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#4c4c57",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const handleChange = async (event) => {
    setDisabled(event.empty)
    setError(event.error? event.error.message : '')
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault()
    setProcessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    if (payload.error) {
      setError(`payment failed ${payload.error.message}`)
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      setTimeout(() => {
        clearCart();
        navigation('/')
      }, 3000)
    }
  };

  if (cart.length < 1) {
    return <section className='h-[96vh] flex flex-col items-center justify-center gap-8 text-center w-full'>
    <h4 className='text-3xl font-bold'>Your Cart is empty</h4>
    <Link to='/products' >
      <h3 className='font-semibold tracking-[2px] p-1 w-24 text-white bg-[#7e7e7e]'>Fill iT</h3>
    </Link>
  </section>
  }

  return (
    <div className="w-full flex flex-col items-center">
      {
        succeeded ?
          <article>
            <h2>Thank You</h2>
            <h2>Your Payment Was Sucssesful</h2>
            <h4>Redirecting to Home</h4>
          </article>
          : <article>
            <h4>Hello, {myUser && myUser.name}</h4>
            <p>your Total Amount {formatPrice(shipping_fee + total_amount)}</p>
            <p>test Cart Number: 4242 4242 4242 4242</p>
          </article>
      }
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement id="card-element" onChange={handleChange} options={cardStyle} />
        <button disabled={processing || error || disabled} id="submit">
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {!error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        <p className={succeeded ? "result-messege" : "result-messege hidden"}>
          Payment Succeeded
        </p>
      </form>
      <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'right' }} dir='up' open={succeeded} autoHideDuration={3000} >
      <Alert  severity="success" sx={{ width: '100%' }}>
          Payment Sucessful
      </Alert>
    </Snackbar>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </>
  );
};

export default StripeCheckout;
