import { Fragment } from "react";
import MealsSummary from "./mealsummary/meal-summary";
import AvailableMeals from "./availablemeals/available-meals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
