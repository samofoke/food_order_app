import { Fragment } from "react";
import Header from "./Components/header/header";
import Meals from "./Components/meals/meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
