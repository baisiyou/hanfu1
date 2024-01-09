
require('dotenv').config()

const stripe = require('stripe')('sk_test_51OQzU9ExmYKuLPGzKr9F64N2XDy5YoFnIZjl6w3o1cV0JE1YxvwGHXHWVqS12l2V7SSdE8P0VquvuliIU8guhmn600BL1XBb2W');

exports.handler = async function (event, context) {
    if(event.body) {
        const { cart, shipping_fee, total_amount } = JSON.parse(event.body)

        const calculateOrderAmount = () => {
            return shipping_fee + total_amount;
        }

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(),
                currency: 'usd',
            })
            return {
                statusCode: 200,
                body: JSON.stringify({clientSecret: paymentIntent.client_secret})
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({msg: error.message})
            }
        }

    }
    return {
        statusCode: 200,
        body: 'Create Payment Intent'
    }
}