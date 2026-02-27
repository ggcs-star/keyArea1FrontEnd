import React from 'react';

const FloorPlanSection = ({ refProp }) => (
  <section className="pd-sec bsas border-1 border-gray-300 p-4 my-8" id="pdFloorPlan" ref={refProp}>
    <div className="pd-sec-title">
      <h2>Floor Plan</h2>
    </div>
    <div className="pds-body">
      <ul className="fp-img-list">
        <li>
          <div className="fp-img">
            <a data-fancybox="gallery" href="https://dynamic.realestateindia.com/proj_images/project40869/40869-124426-floor-plan-770x400.jpg">
              <img
                className="ls-is-cached lazyloaded"
                src="https://dynamic.realestateindia.com/proj_images/project40869/40869-124426-floor-plan-350x350.jpg"
                data-src="https://dynamic.realestateindia.com/proj_images/project40869/40869-124426-floor-plan-350x350.jpg"
                width="350"
                height="193"
                alt="2 BHK 1138 Sq.ft."
              />
            </a>
          </div>
          <p>2 BHK 1138 Sq.ft.</p>
        </li>
      </ul>
    </div>
  </section>
);

export default FloorPlanSection; 