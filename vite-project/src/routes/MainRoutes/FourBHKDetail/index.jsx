import React, { useState, useEffect, useRef } from "react";
import { Container } from "../../../components/Layout";
import { useParams, Link } from "react-router-dom";

import InquirySidebarForm from "../../../components/InquirySidebarForm";
import NameArea from "./components/NameArea";
import PropertyNavTabs from "./components/PropertyNavTabs";
import Overview from "./components/Overview";
import PropertiesSection from "./components/PropertiesSection";
import AboutBuilderSection from "./components/AboutBuilderSection";
import AmenitiesSection from "./components/AmenitiesSection";
import SimilarProjects from "./components/SimilarProjects";

import { getProjectById, getProjectUnitsById } from "../../../../api";

import UnitSelectionDashboard from "./components/UnitSelectionDashboard";
import PropertyImageSlider from "./components/PropertyImageSlider";
import FloorPlanSection from "./components/FloorPlanSection";
import ImageGallery from "./components/ImageGallery";

// Shimmers
import PropertyImageSliderShimmer from "./components/Shimmer/PropertyImageSliderShimmer";
import BreadcrumbShimmer from "./components/Shimmer/BreadcrumbShimmer";
import NameAreaShimmer from "./components/Shimmer/NameAreaShimmer";
import OverviewShimmer from "./components/Shimmer/OverviewShimmer";
import PropertiesSectionShimmer from "./components/Shimmer/PropertiesSectionShimmer";
import AboutBuilderSectionShimmer from "./components/Shimmer/AboutBuilderSectionShimmer";
import FloorPlanSectionShimmer from "./components/Shimmer/FloorPlanSectionShimmer";
import AmenitiesSectionShimmer from "./components/Shimmer/AmenitiesSectionShimmer";
import ImageGalleryShimmer from "./components/Shimmer/ImageGalleryShimmer";
import UnitSelectionDashboardShimmer from "./components/Shimmer/UnitSelectionDashboardShimmer";

import PriceRange from "./components/PriceRange";
import PriceRangeShimmer from "./components/Shimmer/PriceRangeShimmer";

import devkunjreel from '../../../assets/reels/Realestate/devkunj.mp4'


const FourBHKDetail = () => {
  const { id } = useParams();

  const [projectData, setProjectData] = useState(null);
  const [projectUnits, setProjectUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("overview");

  // FIX: Disable observer during manual scroll
  const isUserScrolling = useRef(false);

  // REFS
  const overviewRef = useRef(null);
  const propertiesRef = useRef(null);
  const priceRangeRef = useRef(null);
  const floorPlanRef = useRef(null);
  const amenitiesRef = useRef(null);
  const aboutBuilderRef = useRef(null);
  const promoterDetailsRef = useRef(null);

  const sectionRefs = {
    overview: overviewRef,
    sale: propertiesRef,
    pricerange: priceRangeRef,
    floorplan: floorPlanRef,
    amenities: amenitiesRef,
    aboutBuilder: aboutBuilderRef,
    promoterDetails: promoterDetailsRef,
  };

  /** FETCH PROJECT */
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setLoading(true);

        const res = await getProjectById(id);
        const apiData = res?.data?.data || {};

        setProjectData({
          project: apiData.project || {},
          bhkUnits: apiData.bhkUnits || {},
          builder: apiData.builder || {},
          imageslider: apiData.imageslider || [],
          floorPlans: apiData.floorPlans || [],
          galleryImages: apiData.galleryImages || [],
          amenities: apiData.amenities || {},
          totalPrice: apiData.totalPrice || {},
          totalSize: apiData.totalSize || {},
          configurations: apiData.configurations || [],
        });

        const projectId =
          apiData?.project?._id ||
          apiData?.project?.id ||
          apiData?.projectId ||
          id;

        const unitsRes = await getProjectUnitsById(projectId);
        setProjectUnits(unitsRes?.data?.data?.blocks || []);

      } catch (err) {
        console.error("API ERROR", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [id]);

  /** SCROLL TO TOP */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  /** FIXED SCROLL HANDLER WITH OFFSET */
  const handleTabClick = (tab) => {
    isUserScrolling.current = true;
    setSelectedTab(tab);

    const offset = 120; // navbar + margin
    const element = sectionRefs[tab]?.current;

    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setTimeout(() => {
        isUserScrolling.current = false;
      }, 700);
    }
  };

  /** ACTIVE TAB ON SCROLL */
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isUserScrolling.current && entry.isIntersecting) {
            const sec = entry.target.getAttribute("data-section");
            setSelectedTab(sec);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.2,
      }
    );

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", key);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [loading]);

  const project = projectData?.project || {};
  const builder = projectData?.builder || {};
  const amenities = projectData?.amenities || {};
  const totalPrice = projectData?.totalPrice || {};
  const bhkUnits = projectData?.bhkUnits || {};
  const totalSize = projectData?.totalSize || {};
  const configurations = projectData?.configurations || {};

  return (
    <section className="bg-white">
      <Container>
        {/* BREADCRUMB */}
        {loading ? (
          <BreadcrumbShimmer />
        ) : (
          <nav className="py-2 text-sm text-gray-500 mb-4">
            <ol className="flex">
              <li>
                <Link to="/" className="text-red-500">Home</Link> /
              </li>
              <li>
                <Link to={`/four-bhk/${id}`} className="text-red-500"> FourBHK </Link> /
              </li>
              <li className="text-gray-700 font-semibold">{project?.name}</li>
            </ol>
          </nav>
        )}

        <div className="md:flex md:flex-row md:items-start gap-8">
          {/* LEFT SIDE */}
          <div className="md:w-2/3">

            {loading ? (
              <PropertyImageSliderShimmer />
            ) : (
              <PropertyImageSlider images={projectData.imageslider} />
            )}

            {loading ? (
              <NameAreaShimmer />
            ) : (
              <NameArea
                project={project}
                builder={builder}
                totalPrice={totalPrice}
                configurations={configurations}
              />
            )}

            <PropertyNavTabs
              activeTab={selectedTab}
              handleTabClick={handleTabClick}
            />

            {/* OVERVIEW */}
            <div ref={overviewRef} data-section="overview">
              {loading ? <OverviewShimmer /> : (
                <Overview
                  project={project}
                  builder={builder}
                  totalPrice={totalPrice}
                  totalSize={totalSize}
                  bhkUnits={bhkUnits}
                />
              )}
            </div>

            {/* PROPERTIES */}
            <div ref={propertiesRef} data-section="sale">
              {loading ? <PropertiesSectionShimmer /> : (
                <PropertiesSection
                  project={project}
                  bhkUnits={bhkUnits}
                  totalSize={totalSize}
                />
              )}
            </div>

            {/* ABOUT BUILDER */}
            <div ref={aboutBuilderRef} data-section="aboutBuilder">
              {loading ? <AboutBuilderSectionShimmer /> : (
                <AboutBuilderSection project={builder} />
              )}
            </div>

            {/* FLOOR PLAN */}
            <div ref={floorPlanRef} data-section="floorplan">
              {loading ? <FloorPlanSectionShimmer /> : (
                <FloorPlanSection floorPlans={projectData.floorPlans} />
              )}
            </div>

            {/* PRICE RANGE */}
            <div ref={priceRangeRef} data-section="pricerange">
              {loading ? (
                <PriceRangeShimmer />
              ) : (
                <PriceRange
                  localityData={{
                    name:
                      project?.location?.city ||
                      project?.location?.area ||
                      project?.location?.address ||
                      "Locality",
                    growth: totalPrice?.growth || "N/A",
                    growthPeriod: totalPrice?.growthPeriod || "Last 5 years",
                    growth_percent: totalPrice?.growth_percent || 0,
                  }}
                  id={id}
                />
              )}
            </div>

            {/* AMENITIES */}
            <div ref={amenitiesRef} data-section="amenities">
              {loading ? <AmenitiesSectionShimmer /> : (
                <AmenitiesSection project={amenities} />
              )}
            </div>

            {/* GALLERY */}
            <div>
              {loading ? <ImageGalleryShimmer /> : (
                <ImageGallery project={projectData} />
              )}
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="sticky top-24 md:w-1/3">
              <video
                src={devkunjreel}
                controls
                muted
                autoPlay
                loop
                className="rounded-lg w-full h-[600px] mb-4"
              />

            <section className="pd-inquiry">
              <h2 className="st-heading">
                {project?.name} <span>Get Best Offer</span>
              </h2>
              <InquirySidebarForm />
            </section>
          </div>
        </div>

        {/* UNITS */}
        {loading ? (
          <UnitSelectionDashboardShimmer />
        ) : (
          <UnitSelectionDashboard
            unitsData={projectUnits}
            projectId={project?._id || id}
          />
        )}

        <SimilarProjects />
      </Container>
    </section>
  );
};

export default FourBHKDetail;
