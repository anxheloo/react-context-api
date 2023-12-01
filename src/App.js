import "./App.css";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from "./components/Product";
import CartContextprovider from "./store/shopping-cart-context";

function App() {
  return (
    <CartContextprovider>
      <div className="App">
        <Header></Header>
        <Shop></Shop>
      </div>
    </CartContextprovider>
  );
}

export default App;
