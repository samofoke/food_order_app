import { useContext, useEffect, useState } from "react";
import CartIcon from "../carticon/cart-icon";
import CartContext from "../../store/cart-context";
import classes from "./button.module.css";

const Button = (props) => {
  const [btnHighLight, setBtnHighLight] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighLight ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighLight(true);

    const timer = setTimeout(() => {
      setBtnHighLight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default Button;
