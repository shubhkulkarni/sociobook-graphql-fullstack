import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";

export const appRouter = [
  { path: "/signin", component: Login },
  { path: "/signup", component: Signup },
];

export const authRouter = [{ path: "/home", component: Home }];
