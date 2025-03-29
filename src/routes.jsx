import { Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";

// Pages imports
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";

import Team from "./pages/Team";
import Dashboard from "./pages/live-voting/Dashboard";
import Analytics from "./pages/live-voting/Analytics";
import Login from "./pages/live-voting/Login";

const Routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    {/* Routes for different pages */}
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<Register />} />

    <Route path="about" element={<About />} />
    <Route path="team" element={<Team />} />
    <Route path="events" element={<Events />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="analytics" element={<Analytics />} />

    <Route path="/login" element={<Login />} />

    <Route path="*" element={<Home />} />
    {/* Add other pages below */}
  </Route>
);

export default Routes;
