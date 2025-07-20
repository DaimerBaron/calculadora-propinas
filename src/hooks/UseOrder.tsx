import { useState } from "react";
import type { MenuItem } from "../types";
type OrderItem = MenuItem & {
  quantity: number;
};
export const UseOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    const existsOrder = order.find((orderItem) => orderItem.id === item.id);
    if (existsOrder) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };
  return {
    addItem,
    order,
  };
};
