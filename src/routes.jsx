import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";

// Export the raw routes array for testing
export const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
];

// Export the router for the application
export const router = createBrowserRouter(routes);

// Default export remains for backward compatibility
export default router;