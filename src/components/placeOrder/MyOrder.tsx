import { IoMdAdd } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
export default function MyOrder() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Your Order</h1>
        <button className="text-xl font-bold text-red-500 flex items-center">
          <h3>Add Item</h3>
          <IoMdAdd />
        </button>
      </div>

      <div className="my-5">
        <div className="flex justify-between border-b-2 pb-2 mb-2">
          <div className="flex items-center">
            <div className="bg-red-500 text-white px-3 py-1 rounded mr-5">
              <p>2</p>
            </div>
            <div>
              <p className="text-2xl">Margarita A</p>
              <p className="text-gray-500">crab & cucumber</p>
            </div>
          </div>
          <div className="flex items-center">
            <MdCurrencyRupee size={25} />
            <p className="text-xl">412.00</p>
          </div>
        </div>
        <div className="flex justify-between border-b-2 pb-2 mb-2">
          <div className="flex items-center">
            <div className="bg-red-500 text-white px-3 py-1 rounded mr-5">
              <p>1</p>
            </div>
            <div>
              <p className="text-2xl">Margarita A</p>
              <p className="text-gray-500">tuna & cucumber</p>
            </div>
          </div>
          <div className="flex items-center">
            <MdCurrencyRupee size={25} />
            <p className="text-xl">112.00</p>
          </div>
        </div>
        <div className="flex justify-between border-b-2 pb-2 mb-2">
          <div className="flex items-center">
            <div className="bg-red-500 text-white px-3 py-1 rounded mr-5">
              <p>3</p>
            </div>
            <div>
              <p className="text-2xl">Margarita A</p>
              <p className="text-gray-500">
                smoked salmon over rice with extra sauce to check if this line
                works
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <MdCurrencyRupee size={25} />
            <p className="text-xl">1236.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
