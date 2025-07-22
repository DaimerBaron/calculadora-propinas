import type { OrderItem } from "../types";

type OrderTotalProps = {
  tip: number;
  order: OrderItem[];
  placeOrder: () => void;
};
import { formatCurrency } from "../helpers";
import { useMemo } from "react";
export default function OrderTotal({
  order,
  tip = 0,
  placeOrder,
}: OrderTotalProps) {
  const total = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

  const totalWithTip = total + total * tip;

  return (
    <>
      <div className="space-y-2 border-t border-gray-300 mt-5">
        <h2 className=" font-black mt-3 mb-3 text-xl">Totales y Propinas </h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-black">{formatCurrency(total)}</span>
        </p>

        <p>
          Propina:{" "}
          <span className="font-black">{formatCurrency(total * tip)}</span>
        </p>

        <p>
          Total a pagar:{" "}
          <span className="font-black">{formatCurrency(totalWithTip)}</span>
        </p>

        <button onClick={placeOrder} className="bg-black text-white p-4 rounded-2xl w-full cursor-pointer disabled:opacity-10"
        disabled={total===0}>
          Guardar Orden
        </button>
      </div>
    </>
  );
}
