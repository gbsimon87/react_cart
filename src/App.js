import Cart from './Cart';
import { useGlobalContext } from './context';
import Navbar from './Navbar';

function App() {
  const { cart } = useGlobalContext();

  return (
    <div className="App">
      <Navbar />
      <main>
        <h2 className="title">YOUR BAG</h2>
        { cart.length > 0 && <Cart /> }
      </main>
    </div>
  );
}

export default App;
