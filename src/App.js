import React from "react";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { fetchPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(dispatch(fetchPizzas()));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

/*const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
    dispatch,
  };
};*/

export default App;
