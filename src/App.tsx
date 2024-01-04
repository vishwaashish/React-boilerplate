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
import AuthApp from "./modules/auth/AuthApp";
// import PrivateRoute from "./routes/PrivateRoute";
// import PublicRoute from "./routes/PublicRoute";

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
          {/* <Routes>
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
            <Route
              path="/"
              element={<PrivateRoute element={<Dashboard />} path="/" />}
            />
          </Routes> */}

          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="/auth/*" element={<AuthApp />}></Route>
            <Route path="/*" element={<Module2Routes />}></Route>
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
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

export const Module2Routes = () => {
  return (
    <Routes>
      <Route path="">
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
