import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51KQGNJG8TsDk6w3kkZsoctGarECufuLhtIBEjKIcaQERTg75pXJ0ZuqrL04I25Fz5ppcoKu4Z4Mcq91uIhf7JdqR00Dj6KUYjY"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
