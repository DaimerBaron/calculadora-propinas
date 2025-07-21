import type { OrderItem } from "../types";

type OrderTotalProps = {
  tip: number;
  order: OrderItem[];
};
import { formatCurrency } from "../helpers";
import { useMemo } from "react";
export default function OrderTotal({ order ,tip=0}: OrderTotalProps) {
  const total = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

    const totalWithTip = total + total * tip;
    

  return (
    <>
      <div className="space-y-2">
        <h2 className="text-2xl font-black mt-3 mb-3">Totales y Propinas </h2>
        <p>
          Subtotal a pagar: <span>{formatCurrency(total)}</span>
        </p>

        <p className=" font-black">
          Total a pagar:{" "}
          <span className="text-teal-800">{formatCurrency(totalWithTip)}</span>
        </p>
      </div>
    </>
  );
}
