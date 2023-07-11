import { Fragment, useState } from "react";
import Header from "./Components/header/header";
import Meals from "./Components/meals/meals";
import Cart from "./Components/Cart/cart";

function App() {
  const [showCartItems, setShowCartItems] = useState(false);

  const showCartHandler = () => {
    setShowCartItems(true);
  };

  const hideCartHandler = () => {
    setShowCartItems(false);
  };
  return (
    <Fragment>
      {showCartItems && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
