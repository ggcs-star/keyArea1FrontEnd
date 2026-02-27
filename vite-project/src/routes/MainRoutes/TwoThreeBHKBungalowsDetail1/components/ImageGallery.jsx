import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'; // Import Thumbnails plugin
import 'yet-another-react-lightbox/styles.css'; // Import YARL styles
import 'yet-another-react-lightbox/plugins/thumbnails.css'; // Import Thumbnails plugin styles

const DEFAULT_GALLERY_IMAGES = [
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-1.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-1-350x350.jpg',
    alt: 'Property Gallery Image 1',
    height: 196,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-2.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-2-350x350.jpg',
    alt: 'Property Gallery Image 2',
    height: 193,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-3.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-3-350x350.jpg',
    alt: 'Property Gallery Image 3',
    height: 189,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-4.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-4-350x350.jpg',
    alt: 'Property Gallery Image 4',
    height: 194,
  },
  {
    full: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-5.jpg',
    thumb: 'https://dynamic.realestateindia.com/proj_images/project40869/projGal-5-350x350.jpg',
    alt: 'Property Gallery Image 5',
    height: 190,
  }
];

const ImageGallery = ({ refProp, project, images = [] }) => {
  const galleryImages = Array.isArray(project?.galleryImages) && project.galleryImages.length > 0
    ? project.galleryImages
    : images.length > 0
      ? images
      : DEFAULT_GALLERY_IMAGES;

  const isDefault = galleryImages === DEFAULT_GALLERY_IMAGES;
  const [showAll, setShowAll] = useState(false); // State to toggle showing all images
  const [lightboxIndex, setLightboxIndex] = useState(-1); // State to manage which image is currently open in the lightbox

  const toggleImages = () => setShowAll((prev) => !prev);

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 4); // Control the number of visible images

  const openLightbox = (index) => setLightboxIndex(index); // Open lightbox at the given index
  const closeLightbox = () => setLightboxIndex(-1); // Close the lightbox

  return (
    <section className="pd-sec bsas border-1 border-gray-300 p-4 my-8" id="pdImageGallery" ref={refProp}>
      <div className="pd-sec-title">
        <h2>Image Gallery Of This Project</h2>
      </div>

      {/* Image List */}
      <ul className="fp_img_list grid grid-cols-1 lg:grid-cols-2 gap-2">
        {visibleImages.map((img, idx) => (
          <li key={idx} className="group">
            <div className="fp-img-inb">
              <div className="fp-img overflow-hidden">
                <img
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                  src={img.thumb}
                  width="350"
                  height={img.height || 196}
                  alt={img.alt || ''}
                  loading="lazy"
                  onClick={() => openLightbox(idx)} // Open the lightbox on click
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Button to toggle images visibility */}
      {galleryImages.length > 4 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleImages}
            className="items-center flex justify-center hover:bg-primary border border-primary hover:text-white text-primary rounded p-2 cursor-pointer"
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      )}

      {/* Sample text for default images */}
      {isDefault && (
        <p className="text-xs text-gray-500 mt-4 italic">
          *Sample gallery images shown. Actual images may vary by project.
        </p>
      )}

      {/* Lightbox Component with Thumbnails plugin */}
      <Lightbox
        open={lightboxIndex !== -1} // Lightbox is open when the index is not -1
        close={closeLightbox} // Close function
        slides={galleryImages.map((img) => ({
          src: img.full, // Full-size image
          thumbnail: img.thumb, // Thumbnail image for the lightbox
          title: img.alt || '', // Image title
        }))}
        index={lightboxIndex} // Index of the current slide
        plugins={[Thumbnails]} // Add Thumbnails plugin
        thumbnails={{
          position: "bottom", // Position the thumbnails at the bottom
          width: 100, // Thumbnail width
          height: 70, // Thumbnail height
          borderRadius: 4, // Border radius for thumbnails
          padding: 4, // Padding inside the thumbnail
          gap: 12, // Gap between thumbnails
          imageFit: "cover", // Ensure thumbnails cover the space properly
          showToggle: true, // Allow toggling visibility of thumbnails
        }}
      />
    </section>
  );
};

export default ImageGallery;
