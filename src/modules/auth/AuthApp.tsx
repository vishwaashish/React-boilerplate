import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import ForgotPassword from "./pages/forgot-password";
import NewPassword from "./pages/new-password";
import TwoSteps from "./pages/two-steps";
import AuthOutlet from "./AuthOutlet";

const AuthApp = () => {
  return (
    <Routes>
      <Route path="" element={<AuthOutlet />}>
        <Route index element={<SignIn />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="new-password" element={<NewPassword />} />
        <Route path="two-steps" element={<TwoSteps />} />
        <Route path="*" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default AuthApp;
