import React from 'react'

const paragraphData = [
  { text: 'Discover our story and how we empower businesses.' },
  { text: 'Innovation drives us forward every day.' },
  { text: 'Our team is dedicated to your success.' },
  { text: 'We believe in the power of collaboration.' },
  { text: 'Real results, real impact, real people.' },
  { text: 'Transforming industries with technology.' },
  { text: 'Your growth is our mission.' },
  { text: 'Building a brighter future together.' },
  { text: 'Health and wellness at the core of our values.' },
  { text: 'Empowering healthier communities.' },
  { text: 'Innovative solutions for better living.' },
  { text: 'Caring for you, every step of the way.' },
  { text: 'Connecting you to the best in pharma.' },
  { text: 'Seamless integration for your business.' },
  { text: 'Enhance your workflow with smart tools.' },
  { text: 'Mobile-first solutions for modern needs.' },
  { text: 'Retail reimagined for the digital age.' },
  { text: 'Efficiency meets innovation in every product.' },
  { text: 'Your trusted partner in retail growth.' },
  { text: 'Experience the future of retail today.' },
];

const Paragraphs = () => {
  return (
    <>
      {paragraphData.map((item, idx) => (
        <div className={`unique-paragraph image-paragraph ${idx % 2 === 0 ? 'image-left' : 'image-right'}`} key={idx}>
          <span>{item.text}</span>
        </div>
      ))}
    </>
  )
}

export default Paragraphs 