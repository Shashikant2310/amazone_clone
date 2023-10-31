import Header from "./components/Headers/Header";
import Panel from "./components/Headers/Panel";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home";
import { productData } from "./api/api";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductPage from "./components/Home/ProductPage";

const Layout = () => {
  return (
    <div>
      <Header />
      <Panel />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: productData,
        },
        {
          path: "product/:id",
          element: <ProductPage />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/registration",
      element: <Register />,
    },
  ]);
  {
    /* <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={productData} />
      <Route path="/cart" element={<Cart />} />
    </Route>
    <Route path="/signin" element={<SignIn />} />
    <Route path="/registration" element={<Register />} /> */
  }
  return (
    <div className=" font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
