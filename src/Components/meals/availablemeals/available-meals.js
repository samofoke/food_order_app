import { useEffect, useState } from "react";
import Card from "../../Card/card";
import MealsItem from "../../mealitem/meal-item";
import classes from "./availablemeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://coreone-a42c5-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      const loadMeals = [];

      for (const key in responseData) {
        loadMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadMeals);
      setLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading === true) {
    return (
      <section className={classes.mealloading}>
        <p>Loading....</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
