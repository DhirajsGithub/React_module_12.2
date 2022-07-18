import React from "react";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Products from "./Pages/Products.js";
import About from "./Pages/About.js";
import MainHeader from "./Components/MainHeader.js";
import ProductsDetails from "./Pages/ProductsDetails.js";



function App() {
  return (
    <div>
  <MainHeader />
      <main>
      <Switch>
      <Route path="/" exact> 
      {/* exact is very important as each path is starting with / and we only need / so exact  */}
        <Redirect to="/welcome" />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/products/:productId">
        <ProductsDetails />
      </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;

/*
adding a dynamic route : 
our-domain.com/product-details/:<any value>

when it comes to matching react router by default looks at the beginng at the start path 
matching the url means matcing the starting here /products is same as /products/:productId
hence both page will be render at same time
<Switch> helps deal with switching a single link at a time, we use exact so that /products only activates when url is .../products
*/