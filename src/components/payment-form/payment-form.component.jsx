import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  PaymentTitle,
} from "./payment-form.styles";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectTotalPrice);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] =
    useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch(
      "/.netlify/functions/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100,
        }),
      }
    ).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : "Guest",
          },
        },
      }
    );

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      alert("Payment successful!");
    }
  };

  return (
    <PaymentFormContainer>
      <PaymentTitle>Credit Card Payment:</PaymentTitle>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType="inverted"
        >
          PAY NOW
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
