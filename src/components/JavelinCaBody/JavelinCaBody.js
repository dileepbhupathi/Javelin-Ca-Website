import React from 'react'
import { BodyTitle } from '../BodyTitle/BodyTitle'
import { MasterCrew } from '../MasterCrew/MasterCrew'
import { ProjectsAndAchivements } from '../ProjestsAndAchivements/ProjectsAndAchivements'
import { ServicesAndPortifolio } from '../ServicesAndPortifolio/ServicesAndPortifolio'
import './JavelinCaBody.scss'

export const JavelinCaBody = () => {
  return (
    <div>
        <BodyTitle/>
        <ServicesAndPortifolio/>
        <ProjectsAndAchivements/>
        <MasterCrew/>
    </div>
  )
}
