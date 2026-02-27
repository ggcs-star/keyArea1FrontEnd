import React from "react";

import { useLocation } from "react-router";
import { useRoutes } from "react-router-dom";

import { servicesData, servicesData1 } from "../../db/dummy";
import CreatorPackages from "./CreatorPackages";
import OtherServices from "./OtherServices";
import PackageDetails from "./CreatorPackages/PackageDetails";
import PricingDetails from "../../components/Pricing/PricingDetails";
import Survey from "./Survey";

export default function OtherRoutes(props) {
    let location = useLocation();
    let slug = location?.state
        ? location?.state?.slug
        : location?.pathname?.replace("/service/", "");

    let serviceData = servicesData?.find((item) => item?.slug === slug);
    let serviceData1 = servicesData1?.find((item) => item?.slug === slug);

    const routes = useRoutes([
        {
            path: "/service/*",
            element: (
                <OtherServices
                    data={serviceData}
                    data1={serviceData1}
                    samePage={location?.state}
                    {...props}
                />
            )
        },
        {
            path: "/plans",
            element: <PricingDetails {...props} />,
        },
        {
            path: "/creator-packages",
            children: [
                { path: "", element: <CreatorPackages {...props} /> },
                { path: "*", element: <PackageDetails /> },
            ],
        },
        { path: "/survey-form", element: <Survey {...props} /> },
        // { path: "/service/*", element: <OtherRoutes {...props} /> },
    ]);
    return <div>{routes}</div>;
}
