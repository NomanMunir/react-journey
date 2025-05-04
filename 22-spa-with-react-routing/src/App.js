import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <ProductDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
