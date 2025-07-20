import type { MenuItem } from "../types";
type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};
export default function MenuItem({ item, addItem }: MenuItemProps) {
  const { name, price } = item;
  return (
    <button
      onClick={() => addItem(item)}
      type="button"
      className="w-full p-2 border border-teal-400 hover:bg-teal-100 flex gap-9 justify-between items-center cursor-pointer"
    >
      <p>{name}</p>
      <p className="font-black">${price}</p>
    </button>
  );
}
