import React from 'react'
import { Container } from '../../../../components/Layout'
import KeyHighlights from './KeyHighlights'
import LeftSection from './LeftSection'
import { useEffect } from 'react'

const DetailsHeroSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


  return (
    <div>
        <Container>
            <div className="lg:grid my-8 lg:grid-cols-[1fr_380px] lg:gap-8">
                <div className=' lg:w-full'>
                    <LeftSection/>
                </div>
                <div className="h-max sticky top-20">
                    <KeyHighlights />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default DetailsHeroSection