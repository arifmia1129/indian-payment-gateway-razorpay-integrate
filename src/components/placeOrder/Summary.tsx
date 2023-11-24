import { MdCurrencyRupee } from "react-icons/md";

export default function Summary() {
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold mb-5">Summary</h1>
      <div className="flex justify-between border-b-2 pb-2 mb-2">
        <p className="text-gray-500 text-xl">Subtotal</p>
        <div className="flex items-center">
          <MdCurrencyRupee size={25} />
          <p className="text-xl">1760.00</p>
        </div>
      </div>
      <div className="flex justify-between border-b-2 pb-2 mb-2">
        <p className="text-gray-500 text-xl">Discount</p>
        <div className="flex items-center text-blue-500">
          <p>-</p>
          <MdCurrencyRupee size={25} />
          <p className="text-xl">759.50</p>
        </div>
      </div>
      <div className="flex justify-between border-b-2 pb-2 mb-2">
        <p className="text-gray-500 text-xl">Delivery Fee</p>
        <div className="flex items-center ">
          <MdCurrencyRupee size={25} />
          <p className="text-xl">12.00</p>
        </div>
      </div>
      <div className="flex justify-between border-b-2 pb-2 mb-2">
        <p className="text-gray-500 text-xl">Taxes</p>
        <div className="flex items-center ">
          <MdCurrencyRupee size={25} />
          <p className="text-xl">46.15</p>
        </div>
      </div>
      <div className="flex justify-between text-2xl font-bold pb-2 mb-2">
        <p>Taxes</p>
        <div className="flex items-center ">
          <MdCurrencyRupee size={25} />
          <p>1058.65</p>
        </div>
      </div>
    </div>
  );
}
