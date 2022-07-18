import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* already / is use so avoid in to="/new-user" */}
      <Link to="new-user">New User</Link>
      <Outlet />

      {/* <Routes>
        <Route path='new-user' element={<h1>Welcome New User</h1>} />
      </Routes> */}

     
    </div>
  );
};

export default About;
