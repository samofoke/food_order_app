import { useContext } from "react";
import MealIteForm from "../mealitemform/meal-item-form";
import CartContext from "../../store/cart-context";
import classes from "./mealitem.module.css";

const MealsItem = (props) => {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealIteForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
