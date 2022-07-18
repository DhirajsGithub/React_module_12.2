# What is <mark>React Router</mark> 
It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

## installation: 
mostly version 5 is used <br>
`$ npm install react-router-dom@5`

<br>

in index.js wrap App with BrowserRouter component which was imported from react-route-dom

## adding a dynamic route :
```
our-domain.com/product-details/:<anyvalue> 
```
# useParams() hook 
In our React app sometimes we want to access the parameters of the current route in this case useParams hook comes into action. The react-router-dom package has useParams hooks that let you access the parameters of the current route.

NOTE: 
when it comes to matching react router by default looks at the beginng at the start path 
matching the url means matcing the starting here /products is same as /products/:productId
hence both page will be render at same time
<Switch> helps deal with switching a single link at a time, we use exact so that /products only activates when url is .../products

### replace anchor tag <a></a> wiht :
<Link></Link> to helps to not rerender a page 
<NavLink></NavLink> same as Link --> creates an anchor tag, catches the click, prevents the browser default additional feature has attribute of activeClassName
with activeClassName --> we can added classes whenever the link is active

### dealing with redirect to certain page
if we have route of "/" then we can redirect it with ceratin route using <Redirect to="/component" />
