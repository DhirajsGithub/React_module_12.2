import React from 'react'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    {/* <Link to="/about" >About</Link> */}
                    <NavLink activeClassName={classes.active} to="/about" >About</NavLink>
                </li>
                <li>
                    {/* <Link to="/products" >Products</Link> */}
                    <NavLink activeClassName={classes.active} to="/products" >Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader

/**
 Link to helps to not rerender a page 
 NavLink same as Link --> creates an anchor tag, catches the click, prevents the browser default
 with activeClassName --> we can added classes whenever the link is active
 */