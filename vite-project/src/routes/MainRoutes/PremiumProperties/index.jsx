import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import DetailsHeroSection from './components/DetailsHeroSection'
import ExploreSection from './components/ExploreSection'
import ReviewSection from './components/ReviewSection'

const PremiumProperties = () => {
    useEffect(() => {
        // Remove hash from URL if present
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }
        // Scroll to top after a short delay to override browser anchor scroll
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 10);
    }, []);

    return (
        <div >
            <HeroSection />
            <DetailsHeroSection />
            <ExploreSection />
            <ReviewSection />

        </div>
    )
}

export default PremiumProperties