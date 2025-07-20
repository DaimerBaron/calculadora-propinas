
import MenuItem from './components/MenuItem';
import { menuItems } from './data/db';
function App() {

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="font-black text-center text-2xl">Calculadora de propinas y consumos </h1>
      </header>
      <main className='container mx-auto mt-10 max-w-7xl grid md:grid-cols-2 md:gap-10'> 
        
          <div className="bg-white shadow-md rounded-lg p-6  max-w-5xl px-10  ">
            <h2 className='text-2xl font-black mb-2'>Menu</h2>
            <div className='space-y-2 '>
              {menuItems.map(item=>(<MenuItem key={item.id} item= {item}/>) )}
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mt-6 max-w-5xl ">
            <h2>Consumo</h2>
          </div>
      
      </main>
    </>
  )
}

export default App
