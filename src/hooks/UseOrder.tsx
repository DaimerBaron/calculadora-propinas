import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export const UseOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

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

  const removeItem = (id: MenuItem['id']) => {
    const updatedOrder = order.filter((item) => item.id !== id);
    setOrder(updatedOrder);
  }
  return {
    addItem,
    order,
    removeItem,
    tip,
    setTip
  };
};
