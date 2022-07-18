# React Route 6
## installation: 
`$ npm install react-router-dom@latest`

## Changes
* Switch --> Routes
* BrowserRouter --> BrowserRouter
* Route --> Self closing and take a component as an element attribute 
* path --> remains the same
* redirect --> render={() => <Navigate to="/" />}
* no nedd of exact in v6, if you want that behaviour of < v6 i.e matching the starting path only  you can have as path="/products/*
* order of routes doesn't matter if path = "/products/:productId/ and path = /products/edit if the url is .../products/edit the /products/edit will be active if url is .../products/p1sdfj then products/productId will be active
* Link and NavLink stays the same
* activeClassName --> className={(navData)=> navData.isActive ? classes.active : ''}
* nested Route should be wrapped inside Routes as well
* nested Route and link are relative i.e.  path = /about then in about we want to render user with < v6 we use  /about/new-user but with > v6 we user /new-user in about, only same true for Link
* Outlet --> we can define all our route(s) at the same place and nested route as well for nested route we need to have a pointer to know where the nested content to be inserted hence <outlet /> is used
* useHistory () doesn't work --> useNavigator which takes path and an object(defing replace/push : true/false) as argument, or can simply pass (-1/ -2/ 3) to go the previous 3 forward page
* <Prompt/> component doesn't work in v6 

