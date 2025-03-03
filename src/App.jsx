import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Routes from "./routes";
import About from "./pages/About"



function App() {
  const router = createBrowserRouter(Routes);
  return <RouterProvider router={router} />;
  
}

export default App;
