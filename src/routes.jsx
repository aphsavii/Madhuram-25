import { Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";

// Pages imports
import Home from "./pages/Home";
import About from "./pages/About";
import HomePage from "./pages/HomePage";

const Routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>

    {/* Routes for different pages */}
    <Route
      path=""
      element={
       <HomePage />
      }
    />
    
    { <Route
      path="about"
      element={
        <About />
      }
    /> }

    {/* Add other pages below */}

  </Route>
);

export default Routes;
