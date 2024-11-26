import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import { SelectedFeed } from "./Components/Selected-Components/SelectedFeed.jsx";
import { SelectedMixes } from "./Components/Selected-Components/SelectedMixes.jsx";

const router = createBrowserRouter([
  {
    path: "/Online-Store",
    element: <App />,
  },
  {
    path: "/feed",
    element: <SelectedFeed />,
  },
  {
    path: "/mixes",
    element: <SelectedMixes />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
