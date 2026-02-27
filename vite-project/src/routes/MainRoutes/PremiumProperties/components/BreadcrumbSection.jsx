import React from 'react'

const BreadcrumbSection = () => (
    <nav id="deskProjBreadCrumb" className="desktopBreadCrumb__brdcrumbContainer relative z-[1] flex items-center gap-0.2 lg:gap-2 py-4">
      <div className="flex items-center">
        <a className="desktopBreadCrumb__linkStyle text-red-500 font-medium hover:underline" href="https://www.99acres.com" title="Home" itemProp="url">
          <span itemProp="title">Home</span>
        </a>
        <span className="desktopBreadCrumb__rPin mx-1 lg:mx-2 text-gray-400">›</span>
      </div>
      <div className="flex items-center">
        <a className="desktopBreadCrumb__linkStyle text-red-500 font-medium hover:underline" href="https://www.99acres.com/new-projects-in-hyderabad-ffid" target="_blank" title="New Projects in Hyderabad" itemProp="url">
          <span itemProp="title">Projects in Ahmedabad</span>
        </a>
        <span className="desktopBreadCrumb__rPin mx-1 lg:mx-2 text-gray-400">›</span>
      </div>
      {/* <div className="flex items-center">
        <a className="desktopBreadCrumb__linkStyle text-red-500 font-medium hover:underline" href="https://www.99acres.com/new-projects-in-old-mumbai-highway-hyderabad-ffid" target="_blank" title="New Projects in Old Mumbai Highway" itemProp="url">
          <span itemProp="title"></span>
        </a>
        <span className="desktopBreadCrumb__rPin mx-2 text-gray-400">›</span>
      </div>
      <div className="flex items-center">
        <a className="desktopBreadCrumb__linkStyle text-red-500 font-medium hover:underline" href="https://www.99acres.com/new-projects-in-miyapur-hyderabad-ffid" target="_blank" title="New Projects in Miyapur" itemProp="url">
          <span itemProp="title">Miyapur</span>
        </a>
        <span className="desktopBreadCrumb__rPin mx-2 text-gray-400">›</span>
      </div> */}
      <div id="projectNameTab" className="desktopBreadCrumb__breadCrumbItem desktopBreadCrumb__linkStyle text-blue-900 font-semibold">Devkunj 80</div>
    </nav>
  )

export default BreadcrumbSection