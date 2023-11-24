import MyOrder from "../components/placeOrder/MyOrder";
import PlaceOrderHeadert from "../components/placeOrder/PlaceOrderHeadert";
import Summary from "../components/placeOrder/Summary";

export default function PlaceOrder() {
  return (
    <div>
      <PlaceOrderHeadert />
      <MyOrder />
      <Summary />
    </div>
  );
}
