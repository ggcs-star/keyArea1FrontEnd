import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Programs from "./components/Programs";

import PreferredCities from "./components/PreferredCities";
import TopLocalities from "./components/TopLocalities";
import RealEstateServices from "./components/RealEstateServices";
import FeaturedRealEstate from "./components/FeaturedRealEstate";
import EmergingProperties from "./components/EmergingProperties";
import EmergingArea from "./components/EmergingArea";
import Blogs from "./components/Blogs";
import LatestProperties from "./components/LatestProperties";
import Budgetwise from "./components/Budgetwise";
import TwoBHK from "./components/TwoBHK";
import ThreeBHK from "./components/ThreeBHK";
import FourBHK from "./components/FourBHK";
import FiveBHK from "./components/FiveBHK";
import TwoThreeBHK from "./components/TwoThreeBHK";

export default function Home() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getStrokeDashoffset = () => {
    const circleLength = 2 * Math.PI * 24;
    return circleLength - (circleLength * scrollPercentage) / 100;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getStrokeColor = () => {
    return scrollPercentage > 0 ? "#9ca3af" : "gray";
  };

  return (
    <div className="">
      <HeroSection />
      <PreferredCities className='mt-8'/>

      <Budgetwise/>
      <TwoBHK/>
      <ThreeBHK/>
      <FourBHK/>
      <FiveBHK/>
      {/* <TwoThreeBHK/> */}
      <Programs />

      <FeaturedRealEstate/>
      <EmergingProperties />
      <EmergingArea />
      <LatestProperties/>

      <TopLocalities />
      <RealEstateServices/>
      <Blogs/>
      {/* <VisitSchool /> */}
      {/* <MainPage />
      <StatsSection />
      <NewsAndEvents />
      <InstagramFeed /> */}


      {scrollPercentage > 0 && (
        <div
          className="back-to-top right-aligned primary-color scroll-position-style active"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <span
            className="icon-arrow-up text-white"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "20px",
              // color: primary,
            }}
          >
            ↑
          </span>

          <svg height="50" width="50" viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="23"
              className="fill-gray-500"
              style={{
                stroke: getStrokeColor(),
                strokeWidth: "0",
                strokeDasharray: `${2 * Math.PI * 24}`,
                strokeDashoffset: getStrokeDashoffset(),
                transition: "stroke-dashoffset 0.3s ease, stroke 0.3s ease",
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />

            <circle
              cx="25"
              cy="25"
              r="22"
              className="fill-gray-500"
              style={{
                strokeWidth: "2",
              }}
            />
          </svg>
        </div>
      )}

    </div>
  );
}
