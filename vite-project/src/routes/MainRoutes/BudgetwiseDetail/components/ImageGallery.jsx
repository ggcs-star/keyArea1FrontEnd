import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const FALLBACK_THUMB =
  "https://via.placeholder.com/350x200?text=No+Thumbnail";

const FALLBACK_FULL =
  "https://via.placeholder.com/800x500?text=No+Image";

const ImageGallery = ({ project, images = [] }) => {
  // Correctly extract galleryImages from API
  const galleryImages =
    Array.isArray(project?.galleryImages) && project.galleryImages.length > 0
      ? project.galleryImages
      : images.length > 0
      ? images
      : [];

  const isDefault = galleryImages.length === 0;

  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const toggleImages = () => setShowAll((prev) => !prev);

  // Display first 4 unless user expands
  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, 4);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(-1);

  return (
    <section
      className="pd-sec bsas border-1 border-gray-300 p-4 mt-8"
      id="pdImageGallery"
      // ref={refProp}
    >
      <div className="pd-sec-title">
        <h2>Image Gallery Of This Project</h2>
      </div>

      {/* Image grid */}
      <ul className="fp_img_list grid grid-cols-1 lg:grid-cols-2 gap-2">
        {visibleImages.map((img, idx) => {
          const thumb = img.thumb || img.full || FALLBACK_THUMB;
          const height = img.height || 200;

          return (
            <li key={idx} className="group">
              <div className="fp-img-inb">
                <div className="fp-img overflow-hidden">
                  <img
                    className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                    src={thumb}
                    width="350"
                    height={height}
                    alt={img.alt || `Gallery Image ${idx + 1}`}
                    loading="lazy"
                    onClick={() => openLightbox(idx)}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* View More / View Less button */}
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

      {/* Default sample note */}
      {isDefault && (
        <p className="text-xs text-gray-500 mt-4 italic">
          *Sample gallery images shown. Actual images may vary by project.
        </p>
      )}

      {/* Lightbox with Thumbnails */}
      <Lightbox
        open={lightboxIndex !== -1}
        close={closeLightbox}
        index={lightboxIndex}
        slides={galleryImages.map((img, i) => ({
          src: img.full || FALLBACK_FULL,
          thumbnail: img.thumb || img.full || FALLBACK_THUMB,
          title: img.alt || `Gallery Image ${i + 1}`,
        }))}
        plugins={[Thumbnails]}
        thumbnails={{
          position: "bottom",
          width: 100,
          height: 70,
          gap: 10,
          borderRadius: 4,
          padding: 4,
          imageFit: "cover",
        }}
      />
    </section>
  );
};

export default ImageGallery;
