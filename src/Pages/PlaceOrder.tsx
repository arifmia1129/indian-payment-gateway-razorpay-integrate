import MyOrder from "../components/placeOrder/MyOrder";
import PlaceOrderBtn from "../components/placeOrder/PlaceOrderBtn";
import PlaceOrderHeadert from "../components/placeOrder/PlaceOrderHeadert";
import Summary from "../components/placeOrder/Summary";

export default function PlaceOrder() {
  return (
    <div className="relative">
      <PlaceOrderHeadert />
      <MyOrder />
      <Summary />
      <PlaceOrderBtn />
    </div>
  );
}
