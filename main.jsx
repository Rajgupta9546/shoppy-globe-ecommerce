import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// 🔥 Lazy Loading for Code Splitting
const App = lazy(() => import("./App"));
const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* 🔥 Suspense for Lazy Components */}
    <Suspense fallback={<h2 style={{textAlign:"center"}}>Loading...</h2>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);