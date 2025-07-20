import type { MenuItem} from '../types';
type MenuItemProps = {
    item: MenuItem;
};
export default function MenuItem({item}: MenuItemProps) {
    const { name, price } = item;
  return (
    <button type='button' className='w-full p-2 border border-teal-400 hover:bg-teal-100 flex gap-9 justify-between items-center cursor-pointer'>
        <p>{name}</p>
        <p className='font-black'>${price}</p>
    </button>
  )
}
