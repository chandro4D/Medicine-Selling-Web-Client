import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);
const Payment = () => {
    return (
        <div className="pt-40">
            <div>
                <h1 className='text-center text-sky-500 text-4xl font-bold'>PAYMENT</h1>
            </div>
            <div>
                <Elements stripe={stripePromise} >
                   <CheckoutForm></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;
