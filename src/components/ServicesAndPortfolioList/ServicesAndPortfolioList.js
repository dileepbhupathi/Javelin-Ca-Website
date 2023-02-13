import React from 'react'
import { ServicesPortfolioListData } from '../../Constants/ServicesPortfolioListData'
import './ServicesAndPortfolioList.scss'

export const ServicesAndPortfolioList = () => {
  return (
    <div className='services-portfolio-list-container'>
        {ServicesPortfolioListData.map(each => (
            <div className='service-portfolio-list-item'>
                {each.icon}
                <div className='service-portfolio-list-item-content-container'>
                    <h1 className='service-portfolio-list-item-content-title'>{each.name}</h1>
                    <p className='service-portfolio-list-item-content-decscription'>{each.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
