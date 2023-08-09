// package import
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// file import
import Header from "./components/header/Header";
import ProductList from "./components/product/ProductList";
import Login from "./components/login/login";
import Register from "./components/register/register";
import CartPage from "./components/cartpage/cartPage";

// define routes
const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: (
      <>
        <Header /> <Login />
      </>
    ),
  },

  {
    path: "/auth/register",
    element: (
      <>
        <Header /> <Register />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <Header /> <ProductList />
      </>
    ),
  },

  {
    path:"/user/cartPage",
    element:(
      <>
        <Header /> <CartPage />
      </>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
