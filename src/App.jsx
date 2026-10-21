import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./common/Layout";
import Dashboard from "./pages/Dashboard";
import Organization from "./pages/Organization";
import Product from "./pages/Product";
import Reports from "./pages/Reports";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "organization",
          element: <Organization />,
        },
        {
          path: "products",
          element: <Product />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
