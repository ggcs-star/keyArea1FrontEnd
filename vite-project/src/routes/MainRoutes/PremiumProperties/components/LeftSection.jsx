import React from 'react'
import BreadcrumbSection from './BreadcrumbSection'
import ProjectInfo from './ProjectInfo'
import Status from './Status'
import SummaryTable from './SummaryTable'
import FloorPlan from './FloorPlan'
import Tour from './Tour'
import TopFacilities from './TopFacilities'
import LocationAdvantages from './LocationAdvantages'
import MoreAbout from './MoreAbout'
import Brochure from './Brochure'
import ResaleProperties from './ResaleProperties'
import SimilarProjects from './SimilarProjects'
import NewlyLaunched from './NewlyLaunched'
import { Container } from '../../../../components/Layout'


const LeftSection = () => {
  return (
    <>
      <BreadcrumbSection />
      <ProjectInfo />
      <Status />
      <SummaryTable />
      <FloorPlan />
      <Tour />
      <TopFacilities />
      <LocationAdvantages />
      <MoreAbout />
      <Brochure />
      <ResaleProperties />
      <SimilarProjects />
      <NewlyLaunched />
    </>
  )
}

export default LeftSection