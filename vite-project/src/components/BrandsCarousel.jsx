import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
// import { brands, bgColors } from "../db";
import { Container } from "./Layout";
import { H1Animate } from "./Typography";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const Main = styled.main``;

const HorizontalSection = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
`;

const BumperSection = styled.section`
    text-align: center;
    padding: 12px 16px;
    background-color: #0000;
`;

const CardsContainer = styled.div`
    position: relative;
    height: 90%;
    padding: 0 0 0 150px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`;

const SampleCard = styled.div`
    position: relative;
    height: 300px;
    width: 500px;
    background-color: #111f30;
    margin-right: 75px;
    flex-shrink: 0;
`;

// const SampleCards = React.memo(() =>
//     Array(5)
//         .fill(0)
//         .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
// );

const SampleCards = ({ item, handler }) => {
    return (
        <div className="group backdrop-blur-lg backdrop-brightness-0 backdrop-contrast-0 backdrop-grayscale-0 backdrop-hue-rotate-0 backdrop-invert-0 backdrop-opacity-0 backdrop-saturate-0 backdrop-sepia-0 relative flex flex-col mt-6 text-gray-300 border-2 border-gray-800 overflow-hidden bg-[#110f0f] rounded-[20px] w-[350px] ">
            {/* <div className="absolute bg-gray-900 inset-0 h-48 rounded-b-full group-hover:h-full group-hover:rounded-none transition-all duration-200" />
            <div className="absolute bg-green-700 inset-0 h-0 rounded-b-full group-hover:h-48 group-hover:rounded-b-full transition-all duration-200" /> */}
            <div
                className={`absolute bottom-0 h-60 w-full rounded-t-full blur-2xl z-40`}
                style={{ background: bgColors[item?.id - 1] }}
            />
            <div className="p-6 z-50">
                <h5 className="cursive-regular mb-2 font-sans text-2xl antialiased !font-bold leading-snug tracking-normal text-yellow-500">
                    {item?.label}
                </h5>
                <p className="whitespace-pre-wrap pt-3">
                    {item?.desc.substring(0, 100) +
                        (item?.desc.length > 100 ? "..." : "")}
                </p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute bottom-0 p-6 pt-0 z-[100]">
                <button
                    onClick={handler}
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    Know More
                </button>
            </div>
            <div className="z-50">
                <div className="size-80 mx-auto px-4 py-10">
                    <img
                        src={item?.image}
                        alt="card-image"
                        className="size-full"
                    />
                </div>
            </div>
        </div >
    );
};
export default function BrandsCarousel() {
    const navigate = useNavigate()
    return (
        <div className="text-center pt-32 bg-gray-70">
            <H1Animate className="w-1/2 mx-auto text-center">
                From Amma's Kitchen
                {/* Bringing Amma's <br /> */}
                {/* <span className="flex justify-center gap-5">
                    <p>Kitchen to</p>
                    <p className="text-primary">Every Home</p>
                </span> */}
            </H1Animate>

            {/* <Container className="abs olute w-full h-[300px] "></Container> */}
            <GlobalStyle />
            
        </div>
    );
}
