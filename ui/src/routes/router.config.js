import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import Posts from "./../pages/Posts/Posts";
import Profile from "./../pages/Profile/Profile";

export const appRouter = [
  { path: "/signin", component: Login },
  { path: "/signup", component: Signup },
];

export const authRouter = [
  { path: "/home", component: Home },
  { path: "/user-posts", component: Posts },
  { path: "/user-profile", component: Profile },
];
