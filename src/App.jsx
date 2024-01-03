import { useReducer } from "react";
import ProductList from "./components/ProductList";
import cartReducer from "./reducers/cartReducer";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  return (
    <>
      <ProductList dispatch={dispatch} />
      <ShoppingCart cart={state.cart} dispatch={dispatch} />
    </>
  );
}

export default App;

