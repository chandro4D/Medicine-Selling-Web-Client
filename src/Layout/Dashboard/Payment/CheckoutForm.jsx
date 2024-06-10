import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useCart from "../../../Hook/useCart";
import { AuthContext } from "../../../Provider/AuthProvider";


const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret,setClientSecret] = useState('')
    const [transactionId,setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const {user} = useContext(AuthContext);
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
          } 
          else {
            console.log('PaymentMethod', paymentMethod);
            setError('');
          }
        //   confirm payment--------------
        const { paymentIntent , error: confirmError} = await stripe.confirmCardPayment(clientSecret, {

            payment_method: {
                card:card,
                billing_details:{

                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'

                }
            }

        })
        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment intent',paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id',paymentIntent.id);
                setTransactionId(paymentIntent.id);

                //-------- save the payment in the database---------------
                const payment = {
                    email:user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    data:new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status:'pending'
                }
                const res = await axiosSecure.post('/payments',payment);
                console.log('payment saved',res);
            }
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement className="text-2xl mb-7 text-white"
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
            <button className="btn w-20 mb-10 ml-52 mt-2 btn-primary" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {
                transactionId && <p className="text-green-600"> Your Transaction Id : {transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;