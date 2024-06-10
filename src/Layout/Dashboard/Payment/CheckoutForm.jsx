import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useCart from "../../../Hook/useCart";


const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret,setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect( () => {
       axiosSecure.post('/create-payment-intent',{price:totalPrice})
       .then(res => {
        setClientSecret(res.data.clientSecret);
        console.log(res.data.clientSecret)
        
       })
    },[axiosSecure,totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }

          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('error', error);
            setError(error.message);
          } else {
            console.log('PaymentMethod', paymentMethod);
            setError('');
          }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement className="text-2xl text-white"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-md  mt-2 btn-primary" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
        </form>
    );
};

export default CheckoutForm;