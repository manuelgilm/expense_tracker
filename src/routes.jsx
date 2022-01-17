import SignIn from "./pages/login/SignIn";
import SignUp from "./pages/login/SignUp";

import CategoryPage from "./pages/categoryPage/CategoryPage";
import UserPage from "./pages/userPage/UserPage";
import AnalyticsPage from "./pages/analyticsPage/AnalyticsPage";
import UserDashboard from "./pages/dashboard/UserDashboard"

export const routes = [
    {   
        type:"dashboard",
        name: "home",
        key: "home",
        route: "/dashboard",
        component: UserDashboard,
    },
    {   type:"init",
        name: "sign-up",
        key: "sign-up",
        route: "/sign-up",
        component: SignUp,
    },
    {   
        type:"init",
        name: "/",
        key: "/",
        route: "/",
        component: SignIn,
    },
    {
        type:"dashboard",
        name: "Category",
        key: "category",
        route: "/category",
        component: CategoryPage,
    },
    {
        type:"dashboard",
        name: "User",
        key: "user",
        route: "/user",
        component: UserPage,
    },
    {
        type:"dashboard",
        name: "Analytics",
        key: "analytics",
        route: "/analytics",
        component: AnalyticsPage,
    },
  ];

  