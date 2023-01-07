import React from 'react'
import Card from '../../components/Card/Card'
import Navback from '../../components/Navback/Navback'
import Cameras from '../Cameras/Cameras'
import HoloShow from '../HoloShows/HoloShow'
import KeyFeaturesHolo from '../KeyFeaturesHolo/KeyFeaturesHolo'
import LearnFromYou from '../LearnFromYou/LearnFromYou'
import PowerfulAI from '../PowerfulAI/PowerfulAI'
import StreamForYou from '../StreamForYou/StreamForYou'

const Holovision = () => {
  return (
    <>
      <Navback />

      <div className="visitoo container">
        <Card img={'/img/holo.png'} header={'Holovision NVR'} desc={'Accurately detect deliveries, people, animals, Continuous recording, Private storage'} />
      </div>

      <HoloShow />

      <KeyFeaturesHolo />

      <PowerfulAI />
      
      <LearnFromYou />

      <StreamForYou />

      <Cameras />
    </>
  )
}

export default Holovision