import React from 'react';
import { Container } from '../../components/Layout';

const EndFooter = () => {
  const navigationLinks = [
    { text: 'About Us', url: '/about-us' },
    { text: 'Contact Us', url: '/contact-us' },
    { text: 'Feedback', url: '/feedback' },
    { text: 'Complaints', url: '/complaints' },
    { text: 'Terms & Conditions', url: '/terms-conditions' },
    { text: 'Testimonials', url: '/testimonials' },
    { text: 'Sitemap', url: '/sitemap' },
    { text: 'Property Leads', url: '/property-leads' },
    { text: 'FAQ', url: '/faq' },
    { text: 'Advertise With Us', url: '/advertise-with-us' }
  ];
  

  const socialLinks = [
    { 
      url: 'https://www.facebook.com/', 
      icon: 'https://static.realestateindia.com/rei/images/icon_facebook.svg',
      title: 'Follow Us on Facebook'
    },
    { 
      url: '/blog/', 
      icon: 'https://static.realestateindia.com/rei/images/icon_blog.svg',
      title: 'View Blog'
    },
    { 
      url: 'https://www.linkedin.com/', 
      icon: 'https://static.realestateindia.com/rei/images/icon_linkedin.svg',
      title: 'Follow Us on LinkedIn'
    },
    { 
      url: 'https://www.pinterest.com/', 
      icon: 'https://static.realestateindia.com/rei/images/icon_pinterest.svg',
      title: 'Follow Us on Pinterest'
    },
    { 
      url: 'https://twitter.com/', 
      icon: 'https://static.realestateindia.com/rei/images/icon_twitter.svg',
      title: 'Follow Us on Twitter'
    },
    { 
      url: 'https://www.youtube.com/', 
      icon: 'https://static.realestateindia.com/rei/images/icon_youtube.svg',
      title: 'Subscribe Us on YouTube'
    },
    { 
      url: 'https://www.instagram.com/', 
      icon: 'https://static.realestateindia.com/rei/images/icon_instagram.svg',
      title: 'Follow Us on Instagram'
    }
  ];

  return (
    <footer className="bg-white text-black">
      {/* Navigation Links */}
      <div className="border-t-6 border-b border-gray-500 border-b-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className=" text-black">Home</span>
            <span className="text-gray-500">|</span>
            {navigationLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a 
                  href={link.url}
                  title={link.text}
                  className="text-black hover:text-blue-400 transition-colors duration-300"
                >
                  {link.text}
                </a>
                <span className="text-black">|</span>
              </React.Fragment>
            ))}
            <a 
              href="/live-coverage"
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
              title="Google Partner in Ahmedabad"
            >
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold">Live</span>
              <span className="bg-black text-white px-2 py-1 text-xs font-bold">Coverage</span>
            </a>
          </div>
        </div>
      </div>

      {/* App Store and Social Media */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* App Store Links */}
            <ul className="flex items-center gap-4">
              <li>
                <a 
                  href="https://play.google.com/"
                  title="Google Play"
                  target="_blank"
                  rel="nofollow"
                  className="block"
                >
                  <img 
                    src="https://static.realestateindia.com/rei/images/google_store_icon.svg"
                    width="100"
                    height="30"
                    alt="Google Play"
                    title="Google Play"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </li>
              <li>
                <a 
                  href="https://itunes.apple.com/"
                  title="Apple Store"
                  target="_blank"
                  rel="nofollow"
                  className="block"
                >
                  <img 
                    src="https://static.realestateindia.com/rei/images/apple_store_icon.svg"
                    width="100"
                    height="30"
                    alt="Apple Store"
                    title="Apple Store"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <ul className="flex items-center gap-1">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a 
                    href={social.url}
                    title={social.title}
                    target="_blank"
                    rel="nofollow"
                    className="block hover:opacity-80 transition-opacity duration-300"
                  >
                    <img 
                      src={social.icon}
                      alt={social.title}
                      width="30"
                      height="30"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Container>
      <hr/>
      </Container>

      {/* Disclaimer */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-xs text-black leading-relaxed">
            Note : Being an Intermediary, the role of ABC.Com is limited to provide an online platform that is acting in the capacity of a search engine or advertising agency only, for the Users to showcase their property related information and interact for sale and buying purposes. The Users displaying their properties / projects for sale are solely responsible for the posted contents including the RERA compliance. The Users would be responsible for all necessary verifications prior to any transaction(s). We do not guarantee, control, be party in manner to any of the Users and shall neither be responsible nor liable for any disputes / damages / disagreements arising from any transactions
          </div>
        </div>
      </div>


      {/* Copyright */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center text-sm text-gray-400">
            <p>
              Copyright © 2025{' '}
              <a 
                href="https://www.ggconsultancy.services/"
                target="_blank"
                className="underline hover:text-blue-400 transition-colors duration-300"
              >
                GGCS
              </a>{' '}
              All rights reserved.{' '}
              <span>
                -{' '}
                <a 
                  href="/terms-conditions"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EndFooter;