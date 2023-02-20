import React from 'react'
import { AchievementsList } from '../AchievementsList/AchievementsList'
import './Achievements.scss'

export const Achievements = () => {
  return (
    <div className='achievements-container'>
        <h1 className='achievements-title'>
            ACHIEVEMENTS
        </h1>
        <p className='achievements-caption'>
            We are proud of
        </p>
        <AchievementsList/>
    </div>
  )
}
