import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import AuthWrapper from "./components/AuthWrapper/AuthWrapper";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./components/AuthProvider/AuthProvider";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/auth",
      element: (
        <AuthWrapper>
          <Auth />
        </AuthWrapper>
      ),
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}
