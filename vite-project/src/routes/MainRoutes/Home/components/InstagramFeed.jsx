import React from 'react';
import { Container } from '../../../../components/Layout';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { instagramPosts } from '../../../../db';

const InstagramItem = ({ imgSrc, altText }) => {
    return (
        <div className="sbi_item sbi_type_image mx-2">
            <div className="sbi_photo_wrap">
                <a
                    className="sbi_photo"
                    rel="noopener noreferrer"
                    data-full-res={imgSrc}
                >
                    <img
                        decoding="async"
                        src={imgSrc}
                        alt={altText}
                        className="h-[371.5px]"
                    />
                </a>
            </div>
        </div>
    );
};

// This component will hold the Instagram feed (multiple items)
const InstagramFeed = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
        swipeToSlide: false,
        touchMove: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="w-full lg:py-12 font-montserratregular">
            <div className="">
                <div className="">
                    <div className="">
                        <Container>
                            <div className="pl-6">
                                <div className="elementor-widget-container">
                                    <h2 className="text-3xl font-montserratbold">School on Instagram</h2>
                                </div>
                            </div>
                            <div className="mb-4 pl-6">
                                <div className="">
                                    <h2 className="font-montserratlight text-secondary text-md py-4">SHOWCASE STUDENTS WORK</h2>
                                </div>
                            </div>
                        </Container>
                        
                        <div className="px-4 lg:px-0">
                            <div className="">
                                <div id="sb_instagram" className="sbi sbi_mob_col_1 sbi_tab_col_2 sbi_col_4">
                                    <Slider {...settings}>
                                        {instagramPosts.map((post, index) => (
                                            <InstagramItem
                                                key={index}
                                                url={post.url}
                                                imgSrc={post.imgSrc}
                                                altText={post.altText}
                                            />
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
