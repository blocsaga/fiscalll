import Layout1 from "../src/pages/Layout1/Layout1";
import Login from "../src/component/Login";
import SignUp from "../src/component/SignUp";
import ForgotPassword from "../src/component/ForgotPassword";

const routes = [
  { path: "/Login", component: Login },
  { path: "/SignUp", component: SignUp },
  { path: "/ForgotPassword", component: ForgotPassword },
  { path: "/", component: Layout1 },
];

export default routes;
