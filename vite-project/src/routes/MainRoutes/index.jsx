import React from "react";
import { useRoutes, Outlet } from "react-router-dom";

import Home from "./Home";

import Buy from "./Buy";
import Agents from "./Agents";
import BudgetwiseDetail from './BudgetwiseDetail';
import PremiumProperties from './PremiumProperties';
import Sidebar from "./Sidebar";
import FourBHKDetail from "./FourBHKDetail";
import TwoBHKDetail from "./TwoBHKDetail";
import TwoThreeBHKBungalowsDetail from "./TwoThreeBHKBungalowsDetail";
import BudgetwiseAll from "./Home/components/BudgetwiseAll";
import TwoBHKAll from "./Home/components/TwoBHKAll";
import ThreeBHKAll from "./Home/components/ThreeBHKAll";
import FiveBHKAll from "./Home/components/FiveBHKAll";
import FourBHKAll from "./Home/components/FourBHKAll";
import FindMap from "./FindMap";
import ThreeBHKDetail from "./ThreeBHKDetail";
import FiveBHKDetail from "./FiveBHKDetail";


export default function MainRoutes(props) {
    const routes = useRoutes([
        { path: "", element: <Home {...props} /> },


        // Buy routes
        { path: "/buy", element: <Buy {...props} /> },
        { path: "/buy/:city", element: <Buy {...props} /> },
        { path: "/buy/all", element: <Buy {...props} /> },

        // Agents routes
        { path: "/agents", element: <Agents {...props} /> },
        { path: "/agents/:city", element: <Agents {...props} /> },
        { path: "/agents/all", element: <Agents {...props} /> },
        { path: "/budgetwise/:id", element: <BudgetwiseDetail {...props} /> },
        { path: "/budgetwise", element: <BudgetwiseAll {...props} /> },
        { path: "/two-bhk", element: <TwoBHKAll {...props} /> },
        { path: "/three-bhk", element: <ThreeBHKAll {...props} /> },
        { path: "/four-bhk", element: <FourBHKAll {...props} /> },
        { path: "/five-bhk", element: <FiveBHKAll {...props} /> },
        { path: "/two-bhk-detail/:id", element: <TwoBHKDetail {...props} /> },
        { path: "/three-bhk-detail/:id", element: <ThreeBHKDetail {...props} /> },
        { path: "/four-bhk-detail/:id", element: <FourBHKDetail {...props} /> },
        { path: "/five-bhk-detail/:id", element: <FiveBHKDetail {...props} /> },
        { path: "/two-three-bhk-bungalows-detail/:id", element: <TwoThreeBHKBungalowsDetail {...props} /> },
        // { path: "/sidebar", element: <Sidebar {...props} /> },
        { path: "/premium-properties", element: <PremiumProperties {...props} /> },
        { path: "/find-properties-using-map", element: <FindMap {...props} /> },


        Outlet,
    ]);
    return <div className="min-h-screen">{routes}</div>;
}
