import MealIteForm from "../mealitemform/meal-item-form";
import classes from "./mealitem.module.css";
const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealIteForm />
      </div>
    </li>
  );
};

export default MealsItem;
