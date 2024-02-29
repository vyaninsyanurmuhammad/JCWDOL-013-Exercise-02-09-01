import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
