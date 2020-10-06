import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./layout";
import Home from "../page/home";
import store from "../redux/store";
import SneakerDescription from "../page/sneakerDescription";
import ShoppingCart from "../page/shoppingCart";
import UserPage from "../page/userPage";
import "../global.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={UserPage} />
            <Route
              exact
              path="/sneakers/:sneakerId"
              component={SneakerDescription}
            />
            <Route exact path="/shopping/cart" component={ShoppingCart} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
