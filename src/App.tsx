import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { initializeUserFromToken } from "./context/authSlice";
import { store } from "./context/store";
import Login from "./pages/auth/login";
import Contact from "./pages/contact";
import Dashboard from "./pages/dahboard";
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";
import UnauthorizedPage from "./pages/auth/unauthorized";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

store.subscribe(() => console.log(store.getState(), "getSTate"));

const queryClient = new QueryClient();
function App() {
  useEffect(() => {
    store.dispatch(initializeUserFromToken());
  }, []);

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            {/* <PrivateRoute path="contact" element={<Contact />} />
            <PrivateRoute path="/" element={<Dashboard />} />
            <PublicRoute path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} /> */}

            <Route
              path="/login"
              element={<PublicRoute element={<Login />} path="/login" />}
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute
                  element={<Dashboard />}
                  path="/dashboard"
                  requiredRoles={["admin"]}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute
                  element={<Contact />}
                  path="/contact/*"
                  requiredRoles={["admin"]}
                />
              }
            />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            {/* Add other public routes using Route and PublicRoute */}
            <Route
              path="/"
              element={<PrivateRoute element={<Dashboard />} path="/" />}
            />
          </Routes>

          <Loader />
          <Toaster position="top-right" />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
