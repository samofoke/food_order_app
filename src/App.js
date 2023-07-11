import { useState } from "react";
import Header from "./Components/header/header";
import Meals from "./Components/meals/meals";
import Cart from "./Components/Cart/cart";
import CartProvider from "./store/cart-provider";

function App() {
  const [showCartItems, setShowCartItems] = useState(false);

  const showCartHandler = () => {
    setShowCartItems(true);
  };

  const hideCartHandler = () => {
    setShowCartItems(false);
  };
  return (
    <CartProvider>
      {showCartItems && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
