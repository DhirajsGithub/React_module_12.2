import React from "react";
// import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Products from "./Pages/Products.js";
import About from "./Pages/About.js";
import MainHeader from "./Components/MainHeader.js";
import ProductsDetails from "./Pages/ProductsDetails.js";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" render={() => <Navigate to="/welcome" />} />

          {/* <Route path="/about/*" element={<About/>}/> */}
          <Route path="/about/*" element={<About />}>
            <Route path="new-user" element={<h1>Welcome New User</h1>} />
          </Route>

          <Route path="/products" exact element={<Products />} />

          <Route path="/products/:productId" element={<ProductsDetails />} />
        </Routes>
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
