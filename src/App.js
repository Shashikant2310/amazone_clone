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
} from "react-router-dom";
import Home from "./pages/Home";
import { productData } from "./api/api";
import Register from "./pages/Register";

const Layout = () => {
  return (
    <div>
      <Header />
      <Panel />
      <Outlet />
      <Footer />
    </div>
  );
};

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productData} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<Register />} />
      </Route>
    )
  );
  return (
    <div className=" font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
