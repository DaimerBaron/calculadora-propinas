import MenuItem from "./components/MenuItem";
import Order from "./components/Order";
import OrderTotal from "./components/OrderTotal";
import TipPorcentegeForm from "./components/TipPorcentegeForm";
import { menuItems } from "./data/db";
import { UseOrder } from "./hooks/UseOrder";
function App() {
  const { addItem, order, removeItem, tip, setTip, placeOrder } = UseOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="font-black text-center text-2xl">
          Calculadora de propinas y consumos{" "}
        </h1>
      </header>
      <main className="container mx-auto mt-10 max-w-7xl grid md:grid-cols-2 md:gap-10">
        <div className="bg-white shadow-md rounded-lg p-6  max-w-5xl px-10  ">
          <h2 className="text-2xl font-black mb-2">Menu</h2>
          <div className="space-y-2 ">
            {menuItems.map((item) => (
              <MenuItem addItem={addItem} key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6  max-w-5xl ">
          <h2 className="text-2xl font-black mb-2 ">Consumo</h2>
          {order.length > 0 ? (
            <div>
              <Order order={order} removeItem={removeItem} />
              <TipPorcentegeForm setTip={setTip} tip={tip} />
              <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
            </div>
          ) : (
            <p>No hay productos para mostrar</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
