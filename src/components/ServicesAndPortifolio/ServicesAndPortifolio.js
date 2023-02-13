import React from 'react'
import { ServicesAndPortfolioList } from '../ServicesAndPortfolioList/ServicesAndPortfolioList'
import './ServicesAndPortifolio.scss'

export const ServicesAndPortifolio = () => {
  return (
    <div className='services-portfolio-container'>
      <h1 className='service-portfolio-title'>
        SERVICES & PORTFOLIO
      </h1>
      <ServicesAndPortfolioList/>
    </div>
  )
}
