import { Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";

// Pages imports
import Home from "./pages/Home";
import About from "./pages/About";
<<<<<<< HEAD
import Register from "./pages/Register";
=======
import HomePage from "./pages/HomePage";
>>>>>>> 0d59aed259f8a7622f0c001595aaa8fffe010b15

import Team from "./pages/Team";
const Routes = createRoutesFromElements(
  <Route path="/" element={<  Layout />}>

    {/* Routes for different pages */}
    <Route
      path="/"
      element={
       <HomePage />
      }
    />
    <Route
      path="/register"
      element={
       <Register />
      }
    />
    
    { <Route
      path="about"
      element={
        <About />
      }
<<<<<<< HEAD
    /> */}
    
=======
    /> }

    <Route
      path="team"
      element={
       <Team />
      }
    />
>>>>>>> 0d59aed259f8a7622f0c001595aaa8fffe010b15

    {/* Add other pages below */}

  </Route>
);

export default Routes;
