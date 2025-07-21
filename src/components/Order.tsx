import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
type OrderProps = {
  order: OrderItem[];
};
export default function Order({ order }: OrderProps) {
  return (
    <>
      {order.length === 0 ? (
        <p className="text-xl ">No hay pedidos</p>
      ) : (
        order.map((item) => (
          <div key={item.id} className="flex justify-between   border-t border-gray-300 py-2.5 last-of-type:border-b">
            <div>
              <p className="text-lg ">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="text-sm text-gray-500">
                Cantidad: {item.quantity} -- <span className=" text-teal-800 font-black">{formatCurrency(item.price * item.quantity)}</span>
                
              </p>
            </div>
            <button
              type="button"
              className="bg-red-500 text-white  h-8 w-8  rounded-full  hover:bg-red-600 flex justify-center items-center cursor-pointer font-bold"
            >
              x
            </button>
          </div>
        ))
      )}
    </>
  );
}
