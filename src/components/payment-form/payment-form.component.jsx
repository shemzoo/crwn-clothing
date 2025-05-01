import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTotalPrice } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { clearCart } from "../../store/cart/cart.action";

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
  TestCardContainer,
  TestCardTitle,
  TestCardInfo,
} from "./payment-form.styles";

export const PaymentForm = () => {
  const stripe = useStripe();
  const dispatch = useDispatch();
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

    dispatch(clearCart());
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
        <TestCardContainer>
          <TestCardTitle>Test Card Information</TestCardTitle>
          <TestCardInfo>
            Card number: 4242 4242 4242 4242
          </TestCardInfo>
          <TestCardInfo>MM YY: 02 / 42</TestCardInfo>
          <TestCardInfo>CVC: 424</TestCardInfo>
          <TestCardInfo>Index: 42424</TestCardInfo>
        </TestCardContainer>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
