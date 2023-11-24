import { MdCurrencyRupee } from "react-icons/md";

export default function PlaceOrderHeadert() {
  return (
    <div className="flex justify-center my-10 ">
      <div className="shadow-lg w-fit p-5 md:p-10">
        <h3 className="text-xl font-bold text-center">TSX PIZZERIAS</h3>
        <div className="flex justify-center my-5">
          <button className="w-36 h-6 rounded-lg bg-black text-white border-0 mr-[-10px] z-50">
            DELIVERY
          </button>
          <button className="w-36 h-6 rounded-lg border-black bg-gray-300  border-2">
            PICK UP
          </button>
        </div>
        <div className="flex justify-evenly">
          <p className="mx-0 md:mx-10">25 mins</p>
          <div className="mx-0 md:mx-10 flex items-center">
            <MdCurrencyRupee />
            <p>20</p>
          </div>
          <p className="mx-0 md:mx-10">Discounts</p>
        </div>
        <p className="text-center mt-5 text-sm font-bold">
          Menu Hours: 10:00 AM to 11:00 PM
        </p>
      </div>
    </div>
  );
}
